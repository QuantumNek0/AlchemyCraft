import { EquipmentSlot, ItemStack, GameMode, world } from "@minecraft/server";

/**GLOBAL VARIABLES */

// crop
const maxGrowth = 7;
const growthChance = 1 / 3;

// shears
const durabilityDamage = 1;

// loot seeds
const min_loot_seed = 2;
const max_loot_seed = 3;

// loot ingredients
const min_loot_ingredient = 1;
const max_loot_ingredient = 1;

/**---------------- */

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

/** @type {import("@minecraft/server").BlockCustomComponent} */
const CustomCropGrowthBlockComponent = {
    onRandomTick({ block }) {
        if (Math.random() > growthChance) return;

        const growth = block.permutation.getState("alchemycraft:growth");
        if (growth === maxGrowth) return;

        block.setPermutation(
            block.permutation.withState("alchemycraft:growth", growth + 1)
        );
    },
    onPlayerInteract({ block, dimension, player }) {
        if (!player) return;

        const equippable = player.getComponent("minecraft:equippable");
        if (!equippable) return;

        const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
        if (!mainhand.hasItem()) return;

        let growth = block.permutation.getState("alchemycraft:growth");
        const blockLocation = block.center();

        if (player.getGameMode() === GameMode.creative){
            block.setPermutation(block.permutation.withState("alchemycraft:growth", maxGrowth));
        
        } else if (mainhand.typeId === "minecraft:bone_meal" && growth < maxGrowth) {

            // Crop growth
            growth += randomInt(1, maxGrowth - growth);
            block.setPermutation(
                block.permutation.withState("alchemycraft:growth", growth)
            );

            // Bone meal use
            if (mainhand.amount > 1) mainhand.amount--;
            else mainhand.setItem(undefined);

            dimension.playSound("item.bone_meal.use", blockLocation);
            dimension.spawnParticle(
                "minecraft:crop_growth_emitter",
                blockLocation
            );

        } else if (mainhand.typeId === "minecraft:shears" && growth === maxGrowth) {

            // Spawn loot
            growth -= 5;
            block.setPermutation(
                block.permutation.withState("alchemycraft:growth", growth)
            );
            let seed = "";
            let ingredient = "";

            switch (block.typeId) {

                case "alchemycraft:flower_emerald": 

                    seed = "alchemycraft:seed_emerald";
                    ingredient = "alchemycraft:ingredient_emerald";
                    break;

                case "alchemycraft:flower_spider":

                    seed = "alchemycraft:seed_spider";
                    ingredient = "minecraft:spider_eye";
                    break;

                case "alchemycraft:flower_amethyst":
                    
                    seed = "alchemycraft:seed_amethyst";
                    ingredient = "minecraft:amethyst_shard";
                    break;

                case "alchemycraft:flower_apple":
                    
                    seed = "alchemycraft:seed_apple";
                    ingredient = "minecraft:golden_apple";
                    break;

                case "alchemycraft:flower_blaze":

                    seed = "alchemycraft:seed_blaze";
                    ingredient = "minecraft:blaze_powder";
                    break;

                case "alchemycraft:flower_echo":

                    seed = "alchemycraft:seed_echo";
                    ingredient = "minecraft:echo_shard";
                    break;

                case "alchemycraft:flower_ghast":

                    seed = "alchemycraft:seed_ghast";
                    ingredient = "minecraft:ghast_tear";
                    break;

                case "alchemycraft:flower_quartz":

                    seed = "alchemycraft:seed_quartz";
                    ingredient = "minecraft:quartz";
                    break;

                case "alchemycraft:flower_armadillo":

                    seed = "alchemycraft:seed_armadillo";
                    ingredient = "minecraft:armadillo_scute";
                    break;

                case "alchemycraft:flower_chorus":

                    seed = "alchemycraft:seed_chorus";
                    ingredient = "minecraft:chorus_fruit";
                    break;

                case "alchemycraft:flower_magma":

                    seed = "alchemycraft:seed_magma";
                    ingredient = "minecraft:magma_cream";
                    break;

                case "alchemycraft:flower_phantom":
                
                    seed = "alchemycraft:seed_phantom";
                    ingredient = "minecraft:phantom_membrane";
                    break;

                case "alchemycraft:flower_prismarine":
                
                    seed = "alchemycraft:seed_prismarine";
                    ingredient = "minecraft:prismarine_shard";
                    break;

                case "alchemycraft:flower_shulker":
                
                    seed = "alchemycraft:seed_shulker";
                    ingredient = "minecraft:shulker_shell";
                    break;

                case "alchemycraft:flower_slime":
                
                    seed = "alchemycraft:seed_slime";
                    ingredient = "minecraft:slime_ball";
                    break;

                case "alchemycraft:flower_diamond":
                
                    seed = "alchemycraft:seed_diamond";
                    ingredient = "alchemycraft:ingredient_diamond";
                    break;

                case "alchemycraft:flower_redstone":
                
                    seed = "alchemycraft:seed_redstone";
                    ingredient = "minecraft:redstone";
                    break;

                case "alchemycraft:flower_glowstone":
                
                    seed = "alchemycraft:seed_glowstone";
                    ingredient = "minecraft:glowstone_dust";
                    break;

                default:
                    console.warn("Block not defined!");
                    return;
            }
            const loot_seed = new ItemStack(seed, randomInt(
                min_loot_seed, max_loot_seed
            ));
            const loot_ingredient = new ItemStack(ingredient, randomInt(
                min_loot_ingredient, max_loot_ingredient
            ));

            dimension.spawnItem(loot_seed, blockLocation);
            dimension.spawnItem(loot_ingredient, blockLocation);

            // Update shears durability
            const mainhandItem = mainhand.getItem();
            const shearsDurability = mainhandItem.getComponent("minecraft:durability");

            if ((shearsDurability.damage + durabilityDamage) < shearsDurability.maxDurability) {
                dimension.playSound("mob.sheep.shear", blockLocation);

                shearsDurability.damage += durabilityDamage;
                mainhand.setItem(mainhandItem);

            } else {
                dimension.playSound("random.break", blockLocation);
                mainhand.setItem(undefined);
            }
        }
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "alchemycraft:crop_growth",
        CustomCropGrowthBlockComponent
    );
});