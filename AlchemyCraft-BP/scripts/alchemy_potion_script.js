import { world } from "@minecraft/server";

const secondsToTicks = (seconds) => (seconds / 0.05);
const minutesToTicks = (minutes) => (secondsToTicks(minutes * 60));

const amplifier_base = 1;
const amplifier_strong = 2;
const amplifier_long = 0;

const effectDuration_base = minutesToTicks(20);
const effectDuration_strong = minutesToTicks(10);
const effectDuration_long = minutesToTicks(120);

const unique_effects = [
    "absorption",
    "resistance",
    "strength",
    "regeneration",
    "health_boost"
];

const AlchemyPotionInstantHealth = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = 3;

        if(event.itemStack.typeId === "alchemycraft:potion_instant_health_strong"){
            effectDuration = 6;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("instant_health")) {
            event.source.removeEffect("instant_health");
        }
        event.source.addEffect("instant_health", effectDuration, {
            amplifier: 0,
            showParticles: true
        });
    }
};

const AlchemyPotionAbsorption = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_absorption_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;
            
        } else if(event.itemStack.typeId === "alchemycraft:potion_absorption_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("absorption")) {
            event.source.removeEffect("absorption");
        }
        event.source.addEffect("absorption", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionFireResistance = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;
        let amplifier = 0;

        if(event.itemStack.typeId === "alchemycraft:potion_fire_resistance_long"){
            effectDuration = effectDuration_long;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("fire_resistance")) {
            event.source.removeEffect("fire_resistance");
        }
        event.source.addEffect("fire_resistance", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionResistance = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_resistance_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_resistance_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("resistance")) {
            event.source.removeEffect("resistance");
        }
        event.source.addEffect("resistance", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionSpeed = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_speed_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_speed_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("speed")) {
            event.source.removeEffect("speed");
        }
        event.source.addEffect("speed", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionJumpBoost = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_jump_boost_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_jump_boost_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("jump_boost")) {
            event.source.removeEffect("jump_boost");
        }
        event.source.addEffect("jump_boost", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionInvisibility = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = minutesToTicks(10);
        let amplifier = 0;

        if(event.itemStack.typeId === "alchemycraft:potion_invisibility_long"){
            effectDuration = minutesToTicks(20);
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("invisibility")) {
            event.source.removeEffect("invisibility");
        }
        event.source.addEffect("invisibility", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionSlowFalling = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;
        let amplifier = 0;

        if(event.itemStack.typeId === "alchemycraft:potion_slow_falling_long"){
            effectDuration = effectDuration_long;

        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("slow_falling")) {
            event.source.removeEffect("slow_falling");
        }
        event.source.addEffect("slow_falling", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionSaturation = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = 20;

        if(event.itemStack.typeId === "alchemycraft:potion_saturation_strong"){
            effectDuration = 40;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("saturation")) {
            event.source.removeEffect("saturation");
        }
        event.source.addEffect("saturation", effectDuration, {
            amplifier: 0,
            showParticles: true
        });
    }
};

const AlchemyPotionXP = {
    onConsume(event){
        const unique_effect = false;
        let amplifier = 466;

        if(event.itemStack.typeId === "alchemycraft:potion_xp_strong"){
            amplifier = 1395;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        event.source.addExperience(amplifier)
    }
};

const AlchemyPotionVillageHero = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;

        if(event.itemStack.typeId === "alchemycraft:potion_village_hero_long"){
            effectDuration = effectDuration_long;

        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("village_hero")) {
            event.source.removeEffect("village_hero");
        }
        event.source.addEffect("village_hero", effectDuration, {
            amplifier: 0,
            showParticles: true
        });
    }
};

const AlchemyPotionHaste = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_haste_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_haste_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("haste")) {
            event.source.removeEffect("haste");
        }
        event.source.addEffect("haste", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionStrength = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_strength_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_strength_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("strength")) {
            event.source.removeEffect("strength");
        }
        event.source.addEffect("strength", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionRegeneration = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_regeneration_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_regeneration_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("regeneration")) {
            event.source.removeEffect("regeneration");
        }
        event.source.addEffect("regeneration", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionHealthBoost = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        if(event.itemStack.typeId === "alchemycraft:potion_health_boost_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_health_boost_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("health_boost")) {
            event.source.removeEffect("health_boost");
        }
        event.source.addEffect("health_boost", effectDuration, {
            amplifier: amplifier,
            showParticles: true
        });
    }
};

const AlchemyPotionNightVision = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;

        if(event.itemStack.typeId === "alchemycraft:potion_night_vision_long"){
            effectDuration = effectDuration_long;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("night_vision")) {
            event.source.removeEffect("night_vision");
        }
        event.source.addEffect("night_vision", effectDuration, {
            amplifier: 0,
            showParticles: true
        });
    }
};

const AlchemyPotionLevitation = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = secondsToTicks(30);

        if(event.itemStack.typeId === "alchemycraft:potion_levitation_long"){
            effectDuration = secondsToTicks(60);
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("levitation")) {
            event.source.removeEffect("levitation");
        }
        event.source.addEffect("levitation", effectDuration, {
            amplifier: 0,
            showParticles: true
        });
    }
};

const AlchemyPotionWaterBreathing = {
    onConsume(event){
        const unique_effect = false;
        let effectDuration = effectDuration_base;

        if(event.itemStack.typeId === "alchemycraft:potion_water_breathing_long"){
            effectDuration = effectDuration_long;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        if (event.source.getEffect("water_breathing")) {
            event.source.removeEffect("water_breathing");
        }
        event.source.addEffect("water_breathing", effectDuration, {
            amplifier: 0,
            showParticles: true
        });
    }
};

const AlchemyPotionBloodlust = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        const elixir_effects = [
            "absorption",
            "strength",
            "speed"
        ];

        if(event.itemStack.typeId === "alchemycraft:potion_bloodlust_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_bloodlust_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        for (let effect in elixir_effects){
            if (event.source.getEffect(elixir_effects[effect])){
                event.source.removeEffect(elixir_effects[effect]);
            }
            event.source.addEffect(elixir_effects[effect], effectDuration, {
                amplifier: amplifier,
                showParticles: true
            });
        }
    }
};

const AlchemyPotionColossus = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        const elixir_effects = [
            "health_boost",
            "resistance",
            "regeneration"
        ];

        if(event.itemStack.typeId === "alchemycraft:potion_colossus_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_colossus_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        for (let effect in elixir_effects){
            if (event.source.getEffect(elixir_effects[effect])){
                event.source.removeEffect(elixir_effects[effect]);
            }
            event.source.addEffect(elixir_effects[effect], effectDuration, {
                amplifier: amplifier,
                showParticles: true
            });
        }
    }
};

const AlchemyPotionExploration = {
    onConsume(event){
        const unique_effect = true;
        let effectDuration = effectDuration_base;
        let amplifier = amplifier_base;

        const elixir_effects = [
            "haste",
            "jump_boost",
            "night_vision",
            "water_breathing",
            "slow_falling",
            "speed"
        ];

        if(event.itemStack.typeId === "alchemycraft:potion_exploration_long"){
            effectDuration = effectDuration_long;
            amplifier = amplifier_long;

        } else if(event.itemStack.typeId === "alchemycraft:potion_exploration_strong"){
            effectDuration = effectDuration_strong;
            amplifier = amplifier_strong;
        }
        if (unique_effect) {
            for (let effect in unique_effects){

                if (event.source.getEffect(unique_effects[effect])){
                    event.source.removeEffect(unique_effects[effect]);
                }
            }
        }
        for (let effect in elixir_effects){
            if (event.source.getEffect(elixir_effects[effect])){
                event.source.removeEffect(elixir_effects[effect]);
            }
            event.source.addEffect(elixir_effects[effect], effectDuration, {
                amplifier: amplifier,
                showParticles: true
            });
        }
    }
};

const AlchemyPotionLife = {
    onConsume(event){
        let effectDuration = minutesToTicks(999);
        let amplifier = 4;

        const elixir_effects = [
            "health_boost",
            "regeneration",
            "saturation",
            "instant_health"
        ];

        for (let effect in elixir_effects){
            if (event.source.getEffect(elixir_effects[effect])){
                event.source.removeEffect(elixir_effects[effect]);
            }
            if (elixir_effects[effect] === "instant_health") {
                effectDuration = 12;
            }

            event.source.addEffect(elixir_effects[effect], effectDuration, {
                amplifier: amplifier,
                showParticles: true
            });
        }
    }
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_life", AlchemyPotionLife
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_exploration", AlchemyPotionExploration
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_colossus", AlchemyPotionColossus
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_bloodlust", AlchemyPotionBloodlust
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_water_breathing", AlchemyPotionWaterBreathing
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_levitation", AlchemyPotionLevitation
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_night_vision", AlchemyPotionNightVision
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_health_boost", AlchemyPotionHealthBoost
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_regeneration", AlchemyPotionRegeneration
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_strength", AlchemyPotionStrength
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_haste", AlchemyPotionHaste
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_village_hero", AlchemyPotionVillageHero
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_xp", AlchemyPotionXP
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_saturation", AlchemyPotionSaturation
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_slow_falling", AlchemyPotionSlowFalling
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_invisibility", AlchemyPotionInvisibility
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_jump_boost", AlchemyPotionJumpBoost
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_speed", AlchemyPotionSpeed
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_resistance", AlchemyPotionResistance
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_fire_resistance", AlchemyPotionFireResistance
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_absorption", AlchemyPotionAbsorption
    );
});
world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent(
        "alchemycraft:potion_instant_health", AlchemyPotionInstantHealth
    );
});