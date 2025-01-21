@echo off

(
    echo:{
    echo:    "format_version": "1.17.41",
    echo:    "minecraft:recipe_brewing_mix": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:brew_%1_diamond"
    echo:        },
    echo:        "tags": ["brewing_stand"],
    echo:        "input": "alchemycraft:potion_%1_base",
    echo:        "reagent": "alchemycraft:ingredient_diamond",
    echo:        "output": "alchemycraft:potion_%1_potent3"
    echo:    }
    echo:}

) >brew_%1_diamond.json

(
    echo:{
    echo:    "format_version": "1.17.41",
    echo:    "minecraft:recipe_brewing_mix": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:brew_%1_redstone"
    echo:        },
    echo:        "tags": ["brewing_stand"],
    echo:        "input": "alchemycraft:potion_%1_base",
    echo:        "reagent": "minecraft:redstone",
    echo:        "output": "alchemycraft:potion_%1_long"
    echo:    }
    echo:}

) >brew_%1_redstone.json

(
    echo:{
    echo:    "format_version": "1.17.41",
    echo:    "minecraft:recipe_brewing_mix": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:brew_%1_glowstone_dust"
    echo:        },
    echo:        "tags": ["brewing_stand"],
    echo:        "input": "alchemycraft:potion_%1_base",
    echo:        "reagent": "minecraft:glowstone_dust",
    echo:        "output": "alchemycraft:potion_%1_strong"
    echo:    }
    echo:}

) >brew_%1_glowstone_dust.json