// User-supplied Fenumion homebrew: source wording retained; whitespace normalized.
window.FENUMION_CRAFTING_DATA = {
  "source": "https://docs.google.com/document/d/1o5ZDxJN3kMW737Z9NQEemu5sFAmbilNcX-zYHcG6Qxo",
  "title": "Fenumion Skill Descriptions",
  "sections": [
    {
      "id": "trade-hunter",
      "name": "Hunter",
      "summary": "Harvest magical components from defeated creatures.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Hunters serve as one of the initial steps in the process of creating magic items in Fenumion. They have dedicated themselves to the practice of learning how to extract the most-prized pieces and parts from the realm’s many magical enemies, called Components. Once harvested, Craftsmen combine these components with Materials gathered by Scouts and/or possibly refined by Smiths to create magic items.\n\nThe Hunter Progression Table"
        },
        {
          "type": "table",
          "rows": [
            [
              "Skill Level",
              "Skill Exp. Required",
              "Abilities"
            ],
            [
              "Apprentice",
              "1,000",
              "Gathering of Common Components \nGathering of Uncommon Components\n+2 to Gathering Rolls"
            ],
            [
              "Journeyman",
              "4,000",
              "Gathering of Rare Components\n+4 to Gathering Rolls"
            ],
            [
              "Expert",
              "10,000",
              "Gathering of Very Rare Components\n+6 to Gathering Rolls"
            ],
            [
              "Master",
              "20,000",
              "Gathering of Legendary Components\n+8 to Gathering Rolls"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "How it Works"
        },
        {
          "type": "paragraph",
          "text": "Each monster defeated in combat will have a set number of gatherable Components based on its type and difficulty. These components will be required for the creation of magic items. The components will be broken into rarity tiers. At the end of a combat, someone with the hunting skill may choose to try and harvest components. Hunters have one minute after the end of combat to attempt to harvest components from defeated monsters before they lose their magical properties, so each hunter may only gather from one monster per combat. The gathering itself takes fifteen minutes. The tiers are broken down as follows:"
        },
        {
          "type": "table",
          "rows": [
            [
              "Monster CR Range",
              "Components Available"
            ],
            [
              "CR 0 - CR 4",
              "1 Common, 1 Uncommon"
            ],
            [
              "CR 5 - CR 9",
              "2 Common, 1 Uncommon, 1 Rare"
            ],
            [
              "CR 10 - CR 14",
              "3 Common, 2 Uncommon, 2 Rare"
            ],
            [
              "CR 15 - CR 19",
              "3 Common, 2 Uncommon, 2 Rare, 1 Very Rare"
            ],
            [
              "CR 20 - CR 25",
              "3, Uncommon, 2 Rare, 2 Very Rare"
            ],
            [
              "CR 25+",
              "3 Rare, 2 Very Rare, 1 Legendary"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "To gather, the hunter rolls a d20 and adds to it their proficiency bonus and their skill level modifier. Another hunter of the same skill level or higher may use the Help action to give advantage on that roll, or gather from a different monster. This roll cannot be modified in any other way except as outlined in this skill description."
        },
        {
          "type": "paragraph",
          "text": "A roll of a natural 1 destroys all components in the creature and keeps anything from being harvested from it, even if another hunter gathering from the same creature was successful. A hunter harvesting from a favored enemy or in their favored terrain may expend a spell slot depending on the rarity of the component being harvested (1st for common, 2nd for uncommon, 3rd for rare, 4th for very rare, and 5th for legendary) to gain an additional +2 bonus on their harvesting check."
        },
        {
          "type": "paragraph",
          "text": "The DC required to collect a component from a monster varies based on its rarity:"
        },
        {
          "type": "paragraph",
          "text": "Common: DC 5"
        },
        {
          "type": "paragraph",
          "text": "Uncommon: DC 8"
        },
        {
          "type": "paragraph",
          "text": "Rare: DC 15"
        },
        {
          "type": "paragraph",
          "text": "Very Rare: DC 20"
        },
        {
          "type": "paragraph",
          "text": "Legendary: DC 30"
        },
        {
          "type": "paragraph",
          "text": "A hunter who succeeds on a harvesting roll of Rare or above may instead choose to collect one component from each of the two levels below it, provided the creature has enough components available that are not being harvested by another hunter."
        },
        {
          "type": "paragraph",
          "text": "For Example: A hunter rolls a 23 to harvest from a CR 16 Monster. They may:"
        },
        {
          "type": "paragraph",
          "text": "a. Gather one **very rare** component"
        },
        {
          "type": "paragraph",
          "text": "b. Gather one **rare** and one **uncommon** component"
        }
      ]
    },
    {
      "id": "trade-smith",
      "name": "Smith",
      "summary": "Refine materials and recover resources from magic items.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Smiths serve an important role in the magic item economy of Fenumion. They specialize in the many processes that encompass the transmutation of materials and finished products. Smiths can refine Materials gathered by scouts into higher-rarity versions, as well as break down magic items into their component materials or even costly spell components."
        },
        {
          "type": "paragraph",
          "text": "The Smith Progression Table"
        },
        {
          "type": "table",
          "rows": [
            [
              "Skill Level",
              "Skill Exp. Required",
              "Abilities"
            ],
            [
              "Apprentice",
              "1,000",
              "Convert 1d4 Common Materials to 1 Uncommon Material\n+2 to Refining Rolls\nBreak down Uncommon items into spell components"
            ],
            [
              "Journeyman",
              "4,000",
              "Convert 1d2 Common Materials to 1 Uncommon Material\nConvert 1d4 Uncommon Materials into 1 Rare Material\n+4 to Refining Rolls\nBreak down Rare non-attunement items into spell components"
            ],
            [
              "Expert",
              "10,000",
              "Convert 1d2 Uncommon Materials to 1 Rare Material\nConvert 1d4 Rare Materials into 1 Very Rare Material\n+6 to Refining Rolls\nBreak down Rare attunement items into spell components"
            ],
            [
              "Master",
              "20,000",
              "Convert 1d2 Rare Materials to 1 Very Rare Material\nConvert 1d4 Very Rare Materials into 1 Legendary Material\n+8 to Refining Rolls\nBreak down Very Rare items into spell components"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "How it Works"
        },
        {
          "type": "paragraph",
          "text": "To refine, the smith rolls a d20 and adds to it their proficiency bonus and their skill level modifier. Another smith of the same skill level or higher may use the Help action to give advantage on that roll. The Artificer class feature Magic Item Adept/Savant/Master confers an additional bonus to the refining roll of +1, +2, or +3, depending on the highest level of this feature for that Artificer. This roll cannot be modified in any way except as outlined in this skill description. The difficulty for refining materials varies based on the rarity as defined below:"
        },
        {
          "type": "paragraph",
          "text": "Common to Uncommon: DC 9"
        },
        {
          "type": "paragraph",
          "text": "Uncommon to Rare: DC 15"
        },
        {
          "type": "paragraph",
          "text": "Rare to Very Rare: DC 21"
        },
        {
          "type": "paragraph",
          "text": "Very Rare to Legendary: DC 27"
        },
        {
          "type": "paragraph",
          "text": "Refining materials is an imperfect process, so each time the smith makes a refinement roll, they roll a 1d4 or 1d2 as determined in the Abilities column of the table above to see how many materials are consumed in the refinement.\n\nIf the refinement roll fails to meet the DC, one material is destroyed as part of the process. Should the refinement roll fail by 10 or more, half of the materials are destroyed as part of the failure (minimum of 1 material destroyed). A roll of a natural 1 destroys all materials. Should a smith fail two consecutive refinement rolls, they must wait 24 hours before they may attempt another refinement.\n\nSmiths can also reclaim materials from magic items by breaking them down in one of two ways: either for parts or into costly spell components. If breaking down items for parts, they will only receive scouted materials, not hunter components."
        },
        {
          "type": "paragraph",
          "text": "Breaking Down Items for Parts"
        },
        {
          "type": "table",
          "rows": [
            [
              "Journeyman Smith",
              "50% of materials, rounded down"
            ],
            [
              "Exper Smith",
              "75% of materials, rounded down"
            ],
            [
              "Master Smith",
              "100% of materials"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Breaking Down Items for Spell Components"
        },
        {
          "type": "table",
          "rows": [
            [
              "Apprentice Smith",
              "Dismantle an uncommon item into 1d4 spell components worth 100gp or less, but not worth more in total than the item’s cost in the shop document. No diamonds or delerium."
            ],
            [
              "Journeyman Smith",
              "Dismantle a rare non-attunement item into 1d4 spell components worth 500gp or less, but not worth more in total than the item’s cost in the shop document. No diamonds or delerium."
            ],
            [
              "Expert Smith",
              "Dismantle a rare attunement item into 1d4 spell components worth 1000gp or less, but not worth more in total than the item’s cost in the shop document. No diamonds or delerium."
            ],
            [
              "Master Smith",
              "Dismantle a very rare item into 1d4 spell components worth 2500gp or less, but not worth more in total than the item’s cost in the shop document. No diamonds or delerium."
            ]
          ]
        }
      ]
    },
    {
      "id": "trade-craftsman",
      "name": "Craftsman",
      "summary": "Combine components and materials into magic items.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Craftsmen serve as the final stop on the production chain for magic items in Fenumion. They take the Components painstakingly gathered by Hunters and the Materials gathered by Scouts and/or meticulously refined by Smiths and combine them to create magic items."
        },
        {
          "type": "paragraph",
          "text": "The Craftsman Progression Table"
        },
        {
          "type": "table",
          "rows": [
            [
              "Skill Level",
              "Skill Exp. Required",
              "Abilities"
            ],
            [
              "Apprentice",
              "1,000",
              "Allows the crafting of Common and Uncommon magic items that don't require attunement, given the proper supplies   \n+2 to Crafting Rolls"
            ],
            [
              "Journeyman",
              "4,000",
              "Allows the crafting of any Common or Uncommon magic items, as well as Rare items that don't require attunement, given the proper supplies   \n+4 to Crafting Rolls"
            ],
            [
              "Expert",
              "10,000",
              "Allows the crafting of any Rare magic items, as well as Very Rare magic items that don’t require attunement, given the proper supplies   \n+6 to Crafting Rolls"
            ],
            [
              "Master",
              "20,000",
              "Allows the crafting of any Very Rare and all Legendary Items, given the proper supplies\n+8 to Crafting Rolls"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "How it Works"
        },
        {
          "type": "paragraph",
          "text": "To create, the craftsman rolls a d20 and adds to it their proficiency bonus and their skill level modifier. Another craftsman of the same skill level or higher may use the Help action to give  advantage on the roll. The Artificer class feature Magic Item Adept/Savant/Master confers an additional bonus to the refining roll of +1, +2, or +3, depending on the highest level of this feature for that Artificer. This roll cannot be modified in any way except as outlined in this skill description. The DC to successfully craft depends on the rarity of the magic item as defined below:"
        },
        {
          "type": "paragraph",
          "text": "Common: DC 5"
        },
        {
          "type": "paragraph",
          "text": "Uncommon: DC 10"
        },
        {
          "type": "paragraph",
          "text": "Rare: DC 17"
        },
        {
          "type": "paragraph",
          "text": "Very Rare: DC 25"
        },
        {
          "type": "paragraph",
          "text": "Legendary: DC 33"
        },
        {
          "type": "paragraph",
          "text": "To craft a permanent magic item of a given rarity requires a wide variety of supplies, including Components gathered from monsters by Hunters and Materials, which are obtained by Scouts and possibly refined by Smiths. Items requiring attunement generally require more and higher rarity materials than their non-attunement counterparts, as illustrated below. An adventurer may carry up to 5 consumable magic items (potions and scrolls) and are limited to carrying the same rarities as other magic items, as detailed in #server-specific-rule."
        },
        {
          "type": "paragraph",
          "text": "Material Requirements for Permanent, Attunement Magic Items"
        },
        {
          "type": "table",
          "rows": [
            [
              "Item Type",
              "Common",
              "Uncommon",
              "Rare",
              "Very Rare",
              "Legendary"
            ],
            [
              "Metal Weapon",
              "4 Common Metal\n2 Common Relics\n1 Common Component",
              "4 UC Metal\n2 UC Relics\n2 UC Components",
              "6 Rare Metal\n3 Rare Relics\n6 Rare Components",
              "10 VR Metal\n4 VR Relics\n6 VR Components",
              "5 LG Metal\n3 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Wooden Weapon",
              "4 Common Wood\n2 Common Relics\n1 Common Component",
              "4 UC Wood\n2 UC Relics\n2 UC Components",
              "6 Rare Wood\n3 Rare Relics\n6 Rare Components",
              "10 VR Wood\n3 Rare Relics\n6 VR Components",
              "5 LG Wood\n3 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Spellcasting Focus",
              "4 Common Relics\n2 Common Components",
              "4 UC Relics\n4 UC Components",
              "6 Rare Relics\n8 Rare Components",
              "8 VR Relics\n8 VR Components",
              "5 LG Relics\n3 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Wondrous Item",
              "3 Common Relics\n3 Common Components",
              "3 UC Relics\n6 UC Components",
              "5 Rare Relics\n12 Rare Components",
              "6 VR Relics\n10 VR Components",
              "5 LG Relics\n3 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Boots",
              "1 Common Metal\n1 Common Plant\n2 Common Components",
              "1 UC Metal\n1 UC Plant\n4 UC Components",
              "2 Rare Metal\n2 Rare Plant\n8 Rare Components",
              "3 VR Metal\n3 VR Plant\n8 VR Components",
              "3 LG Metal\n3 LG Plant\n3 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Cape",
              "2 Common Plant\n3 Common Components",
              "2 UC Plant\n6 UC Components",
              "3 Rare Plant\n12 Rare Components",
              "4 VR Plant\n12 VR Components",
              "4 LG Plant\n4 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Ring",
              "1 Common Metal\n1 Common Relic\n1 Common Components",
              "1 UC Metal\n1 UC Relic\n2 UC Components",
              "2 Rare Metal\n1 Rare Relic\n6 Rare Components",
              "3 VR Metal\n2 VR Relic\n6 VR Components",
              "2 LG Metal\n2 LG Relics\n3 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Metal Armor",
              "6 Common Metal\n2 Common Relics\n2 Common Components",
              "6 UC Metal\n2 UC Relics\n4 UC Components",
              "8 Rare Metal\n3 Rare Relics\n8 Rare Components",
              "10 VR Metal\n4 VR Relics\n8 VR Components",
              "5 LG Metal\n3 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Other Armor",
              "3 Common Relics\n4 Common Components",
              "3 UC Relics\n8 UC Components",
              "5 Rare Relics\n16 Rare Components",
              "6 VR Relics\n10 VR Components",
              "3 LG Relics\n4 LG Components\n3 Knight’s Treasures"
            ],
            [
              "Shield",
              "2 Common Metal\n2 Common Plants\n2 Common Components",
              "2 UC Metal\n2 UC Plants\n4 UC Components",
              "3 Rare Metal\n3 Rare Plants\n8 Rare Components",
              "4 VR Metal\n4 VR Plants\n8 VR Components",
              "2 LG Metal\n2 LG Plant\n3 LG Components\n3 Knight’s Treasures"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Material Requirements for Permanent, Non-Attunement Magic Items"
        },
        {
          "type": "table",
          "rows": [
            [
              "Item Type",
              "Common",
              "Uncommon",
              "Rare",
              "Very Rare",
              "Legendary"
            ],
            [
              "Metal Weapon",
              "2 Common Metal\n1 Common Relics\n1 Common Component",
              "2 Uncommon Metal\n1 Uncommon Relics\n1 Uncommon Components",
              "3 Rare Metal\n2 Rare Relics\n3 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Wooden Weapon",
              "2 Common Wood\n1 Common Relics\n1 Common Component",
              "2 Uncommon Wood\n1 Uncommon Relics\n1 Uncommon Components",
              "3 Rare Wood\n2 Rare Relics\n3 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Spellcasting Focus",
              "2 Common Relics\n1 Common Components",
              "2 Uncommon Relics\n2 Uncommon Components",
              "3 Rare Relics\n4 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Wondrous Item",
              "1 Common Relics\n2 Common Components",
              "2 Uncommon Relics\n3 Uncommon Components",
              "3 Rare Relics\n6 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Boots",
              "1 Common Metal\n1 Common Plant\n1 Common Components",
              "1 Uncommon Metal\n1 Uncommon Plant\n2 Uncommon Components",
              "1 Rare Metal\n1 Rare Plant\n4 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Cape",
              "1 Common Plant\n2 Common Components",
              "1 Uncommon Plant\n3 Uncommon Components",
              "2 Rare Plant\n6 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Ring",
              "1 Common Metal\n1 Common Relic\n1 Common Components",
              "1 Uncommon Metal\n1 Uncommon Relic\n1 Uncommon Components",
              "1 Rare Metal\n1 Rare Relic\n3 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Metal Armor",
              "3 Common Metal\n1 Common Relics\n1 Common Components",
              "3 Uncommon Metal\n1 Uncommon Relics\n2 Uncommon Components",
              "4 Rare Metal\n1 Rare Relics\n4 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Other Armor",
              "2 Common Relics\n2 Common Components",
              "2 Uncommon Relics\n4 Uncommon Components",
              "3 Rare Relics\n8 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ],
            [
              "Shield",
              "1 Common Metal\n1 Common Plants\n1 Common Components",
              "1 Uncommon Metal\n1 Uncommon Plants\n2 Uncommon Components",
              "1 Rare Metal\n2 Rare Plants\n4 Rare Components",
              "Same as attunement above",
              "Same as attunement above"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Material Requirements for Consumable Magic Items (potions and scrolls)"
        },
        {
          "type": "table",
          "rows": [
            [
              "Item Type",
              "Common",
              "Uncommon",
              "Rare",
              "Very Rare",
              "Legendary"
            ],
            [
              "Potion",
              "2 Common Plant\n2 Common Components",
              "2 Uncommon Plant\n3 Uncommon Components",
              "2 Rare Plant\n4 Rare Components",
              "Not possible",
              "Not possible"
            ],
            [
              "Scroll",
              "2 Common Plant\n2 Common Relics\n1 Common Component\n+ Any costly material component the spell may require",
              "2 Uncommon Plant\n2 Uncommon Relics\n2 Uncommon Components\n+ Any costly material component the spell may require",
              "3 Rare Plant\n3 Rare Relics\n4 Uncommon Components\n+ Any costly material component the spell may require",
              "Not possible",
              "Not possible"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Given a large enough supply of Components and Materials, there is no limit on how many times per day a Crafter may make crafting rolls. However, be aware that if a roll fails by more than double your skill modifier bonus, the attempt destroys half of the Components and Materials involved and a natural 1 on the crafting roll destroys all Components and Materials involved."
        }
      ]
    },
    {
      "id": "trade-scribe",
      "name": "Scribe",
      "summary": "Research and copy spells into a personal book and the community library.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The purpose of the scribe is to delve deep within the disorganized stacks of Pristinia’s library, uncovering treasures long forgotten, or perhaps purposefully left there to be found by Cala and Nuru?\n\nThe mechanics of being a scribe represent this research to find spells and transcribe them into your own spellbook or similar object (such as a warlock’s Book of Secrets or those with the Ritual Caster feat) and provide a copy to the growing compendium open to all in Pristinia. The spell must be from your class’ list and this work does not represent the creation of any magic items, nor do you get a copy of said scroll upon a success."
        },
        {
          "type": "paragraph",
          "text": "The Scribe Progression Table"
        },
        {
          "type": "table",
          "rows": [
            [
              "Skill Level",
              "Skill Exp. Required",
              "Abilities"
            ],
            [
              "Apprentice",
              "1,000",
              "On a successful check, you copy one spell of level 6 or lower of your choosing to the community library and your spellbook, and may not attempt another roll for the rest of the same IRL week, with attempts resetting on Mondays. On a failed result, you may repeat the roll the following day.\n+2 to Scribing Rolls"
            ],
            [
              "Journeyman",
              "4,000",
              "On a successful check, you copy one spell of level 7 or lower of your choosing to the community library and your spellbook, and may not attempt another roll for two weeks. On a failed result, you may repeat the roll the following day. \n+4 to Scribing Rolls"
            ],
            [
              "Expert",
              "10,000",
              "On a successful check, you copy one spell of level 8 or lower of your choosing to the community library and your spellbook, and may not attempt another roll for two weeks. On a failed result, you may repeat the roll the following day. \n+6 to Scribing Rolls"
            ],
            [
              "Master",
              "20,000",
              "On a successful check, you copy one spell of level 9 or lower of your choosing to the community library and your spellbook, and may not attempt another roll for one month. On a failed result, you may repeat the roll the following day. \n+8 to Scribing Rolls"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "How it Works"
        },
        {
          "type": "paragraph",
          "text": "To scribe a spell scroll, the scribe rolls a d20 and adds their proficiency bonus and skill level bonus. Another scribe of the same skill level or higher may use the Help action to give advantage on that roll, but doing so forfeits their ability to roll for scribing their own spell that day. This roll may not be modified in any way except as outlined in this skill description."
        },
        {
          "type": "paragraph",
          "text": "On a success, a scribe roll with the Help action counts as a success for both scribes, prohibiting them from scribing or providing the help action for the period of time equivalent to the level of the spell scribed as defined above. On a failed result, it does not count as a failure for the one providing the help action, allowing them to roll that same day, should they desire."
        },
        {
          "type": "paragraph",
          "text": "The DC to successfully transcribe is based on the spell’s level as follows:"
        },
        {
          "type": "paragraph",
          "text": "Levels 1-5: DC 10"
        },
        {
          "type": "paragraph",
          "text": "Level 6: DC 15"
        },
        {
          "type": "paragraph",
          "text": "Level 7: DC 20"
        },
        {
          "type": "paragraph",
          "text": "Level 8: DC 25"
        },
        {
          "type": "paragraph",
          "text": "Level 9: DC 30"
        },
        {
          "type": "paragraph",
          "text": "A roll of a natural 1 imposes a cooldown timer in days equivalent to 1 + the level of the spell that was attempted to scribe. During this time, the Scribe may not make another attempt nor provide the Help action."
        },
        {
          "type": "paragraph",
          "text": "Various wizard subclasses provide reduced time costs for the scribing of certain spells. Those class features reduce the cooldown time between a successful roll and the next attempt by the amount of time specified (minimum of four days). Any discounts to the cost of copying spells does not apply to the Scribe job, as there is no cost associated with this work."
        }
      ]
    },
    {
      "id": "trade-builder",
      "name": "Builder",
      "summary": "Construct houses, businesses, vehicles, roads and settlements.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The builder serves an important purpose in Fenumion, expanding the world by constructing new buildings, shops, vehicles, roads and even settlements. Experienced builders are also able to receive passive income from the structures they create, based on their use."
        },
        {
          "type": "paragraph",
          "text": "The Builder Progression Table"
        },
        {
          "type": "table",
          "rows": [
            [
              "Skill Level",
              "Skill Exp. Required",
              "Abilities"
            ],
            [
              "Apprentice",
              "1,000",
              "May build player houses with the proper materials"
            ],
            [
              "Journeyman",
              "4,000",
              "May build player shops and taverns with the proper materials, which earns the builder passive income"
            ],
            [
              "Expert",
              "10,000",
              "May build vehicles and roads with proper materials, which earns the builder passive income"
            ],
            [
              "Master",
              "20,000",
              "May build entirely new player settlements with proper materials, which earns the builder passive income"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "How it Works"
        },
        {
          "type": "paragraph",
          "text": "Builders function differently than other trades in Fenumion. Their focus is less on specific skill rolls than it is taking raw materials and investing the time into the world to bring forth entirely new locations for roleplay and adventure.\n\nAs builders progress in capability, they will unlock the ability to create structures, vehicles and more according to the Abilities section of the table above. Each object has its own specific requirements, as detailed below:"
        },
        {
          "type": "paragraph",
          "text": "Player Houses"
        },
        {
          "type": "paragraph",
          "text": "Built with room for up to 4 player characters, houses are modest dwellings which require the following materials for construction: 10 common wood or stone, 2 common metal, and 5 uncommon wood or stone. In addition, each home costs 4,000 gold pieces, plus a potential commission paid directly to and set by the builder. A player house is completed five days after the materials have been assembled and logged as deducted."
        },
        {
          "type": "paragraph",
          "text": "Player Shops and Taverns\nPlayer shops and taverns require the following materials for construction:"
        },
        {
          "type": "paragraph",
          "text": "20 Uncommon wood OR 20 Uncommon stone, 10 uncommon metal, and 10 Common relics. In addition, each shop or tavern costs 5,000 gold pieces, plus a potential commission paid directly to and set by the builder. A player shop or tavern is completed three weeks after the materials are logged, though only half of the total number of materials are required for the construction timer to begin.\n\nBuilders earn passive income from constructed shops and taverns equal to 25 gold pieces per hour of logged RP which takes place inside the establishment."
        },
        {
          "type": "paragraph",
          "text": "Constructing Vehicles"
        },
        {
          "type": "paragraph",
          "text": "Builders of sufficient skill attain the ability to transform how adventurers move around the world. Vehicles have been broken down into three categories, with different material costs and passive income rewards for each: Land Vehicles, Small Water Vehicles and Large Water Vehicles."
        },
        {
          "type": "paragraph",
          "text": "Land Vehicles include items such as wheelbarrows, wagons, chariots, and other similar means of conveyance. Building a Land Vehicle requires 4 common wood, 1 uncommon metal, and 50 gold. They take one week to construct. Each one earns the builder a passive income of 10 gold pieces per week (collectible on Mondays).\n\nSmall Water Vehicles include canoes, rowboats, and keelboats. Building one requires 4 uncommon wood, 1 uncommon metal, and 300 gold. They take one week to construct. Each one earns the builder a passive income of 30 gold pieces per week (collectible on Mondays).\n\nLarge Water Vehicles are vessels used for trade, exploration and war. Examples include galleys, longships, sailing ships and warships. To build one requires 20 common wood, 10 uncommon wood, 5 uncommon metal and 4,000 gold. To begin construction, the builder must have all of the gold and at least half of the total number of materials to begin construction. All materials must be supplied before construction can complete, which takes a minimum of three weeks to complete. Once finished, each Large Water Vehicle provides a passive income of 1,000 gold pieces per week (collectible on Mondays)."
        },
        {
          "type": "paragraph",
          "text": "Constructing a Road"
        },
        {
          "type": "paragraph",
          "text": "Constructing a road is a special action which has the potential to earn the builder a large sum of passive income once complete, but will be incredibly resource intensive, requiring at least dozens of common and uncommon stone, common wood and common metal, but actual totals will vary based on factors like length and terrain and will be determined by Team Alpha and World GMs. Building a road will take no less than one month to complete."
        },
        {
          "type": "paragraph",
          "text": "Constructing a New Settlement"
        },
        {
          "type": "paragraph",
          "text": "Constructing a new player settlement is the pinnacle of any builder’s career. As such, they are limited to only one such construction. Like with a road, this is a monumental undertaking that will require dozens upon dozens of rare resources to complete and at least two months to construct."
        },
        {
          "type": "paragraph",
          "text": "For the projects which require three weeks or longer, including shops, taverns, and large water vehicles, even though only half of the total number of materials is required for construction to begin, construction may take longer if all materials are not provided in a timely manner. Construction cannot finish earlier than three weeks, or three days after all material costs have been paid to allow time for inspections, permitting, and move-in. Simply put: no paying the second half of the materials cost on Day 21."
        }
      ]
    },
    {
      "id": "trade-scout",
      "name": "Scout",
      "summary": "Gather wood, stone, metal, plants and relics.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The scout plays an important role for both craftsmen and builders, accumulating materials during their time around Fenumion which can be used in the creation of magic items, houses, vehicles, shops or even entire settlements."
        },
        {
          "type": "paragraph",
          "text": "The Scout Progression Table"
        },
        {
          "type": "table",
          "rows": [
            [
              "Skill Level",
              "Skill Exp. Required",
              "Abilities"
            ],
            [
              "Apprentice",
              "1,000",
              "A scout may gather 1d4 common materials per 2 hours of logged roleplay on a successful check\n+2 to all Scouting Rolls"
            ],
            [
              "Journeyman",
              "4,000",
              "A scout may gather 1d4 uncommon materials per 2 hours of logged roleplay on a successful check, or 2d4 common ones\n+4 to all Scouting Rolls"
            ],
            [
              "Expert",
              "10,000",
              "A scout may gather 1d4 rare materials per 2 hours of logged roleplay on a successful check, 2d4 uncommon materials, or 3d4 common materials\n+6 to all Scouting Rolls"
            ],
            [
              "Master",
              "20,000",
              "A scout may gather 1d4 very rare materials per 2 hours of logged roleplay on a successful check, 2d4 rare materials, 3d4 uncommon materials, or 4d4 common materials\n+8 to all Scouting Rolls"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "How it Works"
        },
        {
          "type": "paragraph",
          "text": "To gather items, after logging a qualifying RP in #rp-log, the scout goes to #crafting-log and announces what rarity of material they are gathering, and rolls a d20 and adds their skill experience bonus. This roll cannot be modified in any way except as defined in this skill description. They may also choose to gather rarities LOWER than their tier allows. For each tier lower, the scout may add an additional d4 to their gathering roll. The quality of the material gathered is determined by meeting or exceeding the following DCs:"
        },
        {
          "type": "paragraph",
          "text": "Common: DC 5"
        },
        {
          "type": "paragraph",
          "text": "Uncommon: DC 10"
        },
        {
          "type": "paragraph",
          "text": "Rare: DC 15"
        },
        {
          "type": "paragraph",
          "text": "Very Rare: DC 20"
        },
        {
          "type": "paragraph",
          "text": "A natural 1 renders any attempt at finding and gathering materials unsuccessful. On a successful roll, the scout then rolls a 1d4 to determine the quantity of the materials gathered. The scout may choose what type of material was collected: Wood, Stone, Metal, Plants or Relics. Examples of each type of material are available in #regional-resources. A Ranger in their favored terrain cannot fail and gains a +1 to all gathering checks and amount rolls."
        }
      ]
    },
    {
      "id": "trade-beast-whisperer",
      "name": "Beast Whisperer",
      "summary": "Tame approved beasts for personal use or other characters.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The beast whisperer fills a unique role in Fenumion, taking on the challenge of attempting to bring to heel its many wild inhabitants, allowing for them to ride a much wider variety of mounts, and eventually, domesticate beasts so well they may serve as mounts for others."
        },
        {
          "type": "paragraph",
          "text": "The Beast Whisperer Progression Table"
        },
        {
          "type": "table",
          "rows": [
            [
              "Skill Level",
              "Skill Exp. Required",
              "Abilities"
            ],
            [
              "Apprentice",
              "1,000",
              "May tame a pet of CR equal to 1/8 of PC level on a successful check. Available pets will be on a pre-approved list.\n+2 to all Taming Rolls"
            ],
            [
              "Journeyman",
              "4,000",
              "May tame a pet of CR equal to 1/4 of PC level on a successful check. Available pets will be on a pre-approved list.\n+4 to all Taming Rolls"
            ],
            [
              "Expert",
              "10,000",
              "May tame a pet of CR 1/3 of PC level on a successful check. Available pets will be on a pre-approved list\nMay tame a pet of CR 1/4 of the whisperer PC level on a successful check for another player character. Available pets will be on a pre-approved list.\n+6 to all Taming Rolls"
            ],
            [
              "Master",
              "20,000",
              "May tame a pet of CR 1/2 of PC level on a successful check. Available pets will be on a pre-approved list.\nMay tame a pet of CR 1/3 of whisperer PC level on a successful check for another player character. Available pets will be on a pre-approved list.\n+8 to all Taming Rolls"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "How it Works"
        },
        {
          "type": "paragraph",
          "text": "To tame a wild creature, the beast whisperer rolls a d20 and adds their skill level modifier. Another beast whisperer of the same level or higher may use the Help action to give advantage on that roll. This roll cannot be modified in any way except as outlined in this skill description. Successfully taming a creature requires meeting a DC based on the creature’s challenge rating and may require several successful attempts, as defined below:"
        },
        {
          "type": "table",
          "rows": [
            [
              "CR of Wild Creature",
              "DC Required to Tame",
              "Number of Successful Tames"
            ],
            [
              "CR 0 - CR 2",
              "DC 5",
              "One success needed"
            ],
            [
              "CR 3 - CR 4",
              "DC 10",
              "Two successes needed"
            ],
            [
              "CR 5 - CR 6",
              "DC 15",
              "Three successes needed"
            ],
            [
              "CR 7 - CR 8",
              "DC 20",
              "Four successes needed"
            ],
            [
              "CR 9 - CR 10",
              "DC 25",
              "Five successes needed"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "A beast whisperer may attempt to tame a creature multiple times per day. However, if the DC to tame the creature is failed by 5 or more, the beast whisperer must wait 24 hours until attempting to tame any creature again. If a natural 1 is rolled while attempting to tame a pet, it runs away at the first chance and disappears."
        },
        {
          "type": "paragraph",
          "text": "A tamed beast does not count against the server’s summon limits, though a whisperer may only have a number of personally tamed beasts equal to ¼ of their character level. Characters without the Beast Whisperer trade skill may only have one beast trained for them at a time. If a new beast is trained for them, the previous beast escapes back to the wild. Also keep in mind the server’s restrictions on gifts to PCs which give them access to things they otherwise should not have."
        }
      ]
    },
    {
      "id": "switching-trade-skills",
      "name": "Switching Trade Skills",
      "summary": "Changing professions before and after Journeyman rank.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Taking up a trade is a hard but important decision and we understand those can be hard to make. A player may change their character’s trade skill with relative freedom before gaining the Journeyman status (4,000 Skill Experience)."
        },
        {
          "type": "paragraph",
          "text": "Once your character has begun to master their role and reached the Journeyman level, it is still possible to change trade skills, but the switch does come with a cost. Once a character has achieved Journeyman rank (4000 S. Exp), in order to change your trade, you will drop down to the lowest S. Exp of the next rank down."
        },
        {
          "type": "paragraph",
          "text": "For example, an expert with 18,000 S. Exp in one Trade Skill who decides to switch professions will drop down to become a Journeyman with 4,000 S.Exp in their new profession."
        },
        {
          "type": "paragraph",
          "text": "Another example: a Journeyman with 9,000 S. Exp who switches will drop to 1,000 S. Exp and become an Apprentice in their new trade skill."
        },
        {
          "type": "paragraph",
          "text": "We believe this to allow freedom of choice while maintaining some degree of ownership of your hard earned experience. Those found to be abusing the free exchange of trades while at Apprentice rank will be dealt with harshly."
        }
      ]
    }
  ]
};
