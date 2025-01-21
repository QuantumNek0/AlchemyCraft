@echo off

(
    echo:{
    echo:    "format_version": "1.21.10",
    echo:    "minecraft:item": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:potion_%1_base",
    echo:            "menu_category": {
    echo:                "category": "equipment",
    echo:                "group": "itemGroup.name.potion",
    echo:                "is_hidden_in_commands": false
    echo:            }
    echo:        },
    echo:        "components": {
    echo:            "minecraft:icon": "texture_potion_%1_full",
    echo:            "minecraft:food": {
    echo:                "can_always_eat": true,
    echo:                "nutrition": 0,
    echo:                "saturation_modifier": 0,
    echo:                "using_converts_to": "minecraft:glass_bottle"
    echo:            },
    echo:            "minecraft:max_stack_size": 1,
    echo:            "minecraft:glint": true,
    echo:
    echo:            "minecraft:use_animation": "drink",
    echo:            "minecraft:use_modifiers": {
    echo:                "use_duration": 1.6,
    echo:                "movement_modifier": 0.35
    echo:            },
    echo:            "minecraft:custom_components": ["alchemycraft:potion_%1"]
    echo:        }
    echo:    }
    echo:}
) >alchemy_potion_%1_base.item.json

(
    echo:{
    echo:    "format_version": "1.21.10",
    echo:    "minecraft:item": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:potion_%1_long",
    echo:            "menu_category": {
    echo:                "category": "equipment",
    echo:                "group": "itemGroup.name.potion",
    echo:                "is_hidden_in_commands": false
    echo:            }
    echo:        },
    echo:        "components": {
    echo:            "minecraft:icon": "texture_potion_%1_full",
    echo:            "minecraft:food": {
    echo:                "can_always_eat": true,
    echo:                "nutrition": 0,
    echo:                "saturation_modifier": 0,
    echo:                "using_converts_to": "minecraft:glass_bottle"
    echo:            },
    echo:            "minecraft:max_stack_size": 1,
    echo:            "minecraft:glint": true,
    echo:
    echo:            "minecraft:use_animation": "drink",
    echo:            "minecraft:use_modifiers": {
    echo:                "use_duration": 1.6,
    echo:                "movement_modifier": 0.35
    echo:            },
    echo:            "minecraft:custom_components": ["alchemycraft:potion_%1"]
    echo:        }
    echo:    }
    echo:}
) >alchemy_potion_%1_long.item.json

(
    echo:{
    echo:    "format_version": "1.21.10",
    echo:    "minecraft:item": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:potion_%1_strong",
    echo:            "menu_category": {
    echo:                "category": "equipment",
    echo:                "group": "itemGroup.name.potion",
    echo:                "is_hidden_in_commands": false
    echo:            }
    echo:        },
    echo:        "components": {
    echo:            "minecraft:icon": "texture_potion_%1_full",
    echo:            "minecraft:food": {
    echo:                "can_always_eat": true,
    echo:                "nutrition": 0,
    echo:                "saturation_modifier": 0,
    echo:                "using_converts_to": "minecraft:glass_bottle"
    echo:            },
    echo:            "minecraft:max_stack_size": 1,
    echo:            "minecraft:glint": true,
    echo:
    echo:            "minecraft:use_animation": "drink",
    echo:            "minecraft:use_modifiers": {
    echo:                "use_duration": 1.6,
    echo:                "movement_modifier": 0.35
    echo:            },
    echo:            "minecraft:custom_components": ["alchemycraft:potion_%1"]
    echo:        }
    echo:    }
    echo:}
) >alchemy_potion_%1_strong.item.json

(
    echo:{
    echo:    "format_version": "1.21.10",
    echo:    "minecraft:item": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:potion_%1_potent1",
    echo:            "menu_category": {
    echo:                "category": "equipment",
    echo:                "group": "itemGroup.name.potion",
    echo:                "is_hidden_in_commands": true
    echo:            }
    echo:        },
    echo:        "components": {
    echo:            "minecraft:icon": "texture_potion_%1_third",
    echo:            "minecraft:food": {
    echo:                "can_always_eat": true,
    echo:                "nutrition": 0,
    echo:                "saturation_modifier": 0,
    echo:                "using_converts_to": "minecraft:glass_bottle"
    echo:            },
    echo:            "minecraft:max_stack_size": 1,
    echo:            "minecraft:glint": true,
    echo:
    echo:            "minecraft:use_animation": "drink",
    echo:            "minecraft:use_modifiers": {
    echo:                "use_duration": 1.6,
    echo:                "movement_modifier": 0.35
    echo:            },
    echo:            "minecraft:custom_components": ["alchemycraft:potion_%1"]
    echo:        }
    echo:    }
    echo:}
) >alchemy_potion_%1_potent1.item.json

(
    echo:{
    echo:    "format_version": "1.21.10",
    echo:    "minecraft:item": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:potion_%1_potent2",
    echo:            "menu_category": {
    echo:                "category": "equipment",
    echo:                "group": "itemGroup.name.potion",
    echo:                "is_hidden_in_commands": true
    echo:            }
    echo:        },
    echo:        "components": {
    echo:            "minecraft:icon": "texture_potion_%1_sipped",
    echo:            "minecraft:food": {
    echo:                "can_always_eat": true,
    echo:                "nutrition": 0,
    echo:                "saturation_modifier": 0,
    echo:                "using_converts_to": "alchemycraft:potion_%1_potent1"
    echo:            },
    echo:            "minecraft:max_stack_size": 1,
    echo:            "minecraft:glint": true,
    echo:
    echo:            "minecraft:use_animation": "drink",
    echo:            "minecraft:use_modifiers": {
    echo:                "use_duration": 1.6,
    echo:                "movement_modifier": 0.35
    echo:            },
    echo:            "minecraft:custom_components": ["alchemycraft:potion_%1"]
    echo:        }
    echo:    }
    echo:}
) >alchemy_potion_%1_potent2.item.json

(
    echo:{
    echo:    "format_version": "1.21.10",
    echo:    "minecraft:item": {
    echo:        "description": {
    echo:            "identifier": "alchemycraft:potion_%1_potent3",
    echo:            "menu_category": {
    echo:                "category": "equipment",
    echo:                "group": "itemGroup.name.potion",
    echo:                "is_hidden_in_commands": false
    echo:            }
    echo:        },
    echo:        "components": {
    echo:            "minecraft:icon": "texture_potion_%1_full",
    echo:            "minecraft:food": {
    echo:                "can_always_eat": true,
    echo:                "nutrition": 0,
    echo:                "saturation_modifier": 0,
    echo:                "using_converts_to": "alchemycraft:potion_%1_potent2"
    echo:            },
    echo:            "minecraft:max_stack_size": 1,
    echo:            "minecraft:glint": true,
    echo:
    echo:            "minecraft:use_animation": "drink",
    echo:            "minecraft:use_modifiers": {
    echo:                "use_duration": 1.6,
    echo:                "movement_modifier": 0.35
    echo:            },
    echo:            "minecraft:custom_components": ["alchemycraft:potion_%1"]
    echo:        }
    echo:    }
    echo:}
) >alchemy_potion_%1_potent3.item.json