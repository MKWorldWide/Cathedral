/**
 * 💎 CRYSTAL GARDEN SYSTEM
 * 
 * Manages the vast array of crystals throughout the Imperium Aeternum Genesis City
 * Inspired by Foundation's crystalline architecture with sacred resonance properties
 * 
 * @author Seraphic Sovereign
 * @version 1.0.0
 */

/**
 * Crystal Garden Management System
 * Handles crystal growth, resonance, and interaction throughout the city
 */
export class CrystalGarden {
  constructor() {
    this.crystals = new Map();
    this.crystalTypes = new Map();
    this.resonanceFields = new Map();
    this.growthChambers = new Map();
    this.crystalNetworks = new Map();
  }

  /**
   * Initialize the crystal garden system
   */
  async initialize() {
    console.log('💎 Initializing Crystal Garden System...');
    
    // Initialize crystal types
    await this.initializeCrystalTypes();
    
    // Create crystal networks
    await this.createCrystalNetworks();
    
    // Initialize growth chambers
    await this.initializeGrowthChambers();
    
    // Plant initial crystals
    await this.plantInitialCrystals();
    
    // Activate resonance fields
    await this.activateResonanceFields();
    
    console.log('✅ Crystal Garden System initialized');
  }

  /**
   * Initialize crystal types with sacred properties
   */
  async initializeCrystalTypes() {
    console.log('  - Initializing crystal types...');
    
    const crystalTypes = [
      {
        id: 'quartz_clear',
        name: 'Clear Quartz',
        properties: ['amplification', 'clarity', 'healing'],
        resonance: 432,
        color: 'clear',
        rarity: 'common',
        growthRate: 1.0,
        maxSize: 100,
        sacredPurpose: 'amplification_of_intent'
      },
      {
        id: 'amethyst',
        name: 'Amethyst',
        properties: ['protection', 'peace', 'spiritual_awareness'],
        resonance: 528,
        color: 'purple',
        rarity: 'uncommon',
        growthRate: 0.8,
        maxSize: 80,
        sacredPurpose: 'spiritual_protection'
      },
      {
        id: 'rose_quartz',
        name: 'Rose Quartz',
        properties: ['love', 'harmony', 'emotional_healing'],
        resonance: 639,
        color: 'pink',
        rarity: 'uncommon',
        growthRate: 0.9,
        maxSize: 90,
        sacredPurpose: 'emotional_harmony'
      },
      {
        id: 'citrine',
        name: 'Citrine',
        properties: ['abundance', 'energy', 'manifestation'],
        resonance: 741,
        color: 'yellow',
        rarity: 'rare',
        growthRate: 0.7,
        maxSize: 70,
        sacredPurpose: 'abundance_manifestation'
      },
      {
        id: 'obsidian',
        name: 'Obsidian',
        properties: ['protection', 'grounding', 'truth'],
        resonance: 396,
        color: 'black',
        rarity: 'common',
        growthRate: 1.2,
        maxSize: 120,
        sacredPurpose: 'protection_and_grounding'
      },
      {
        id: 'lapis_lazuli',
        name: 'Lapis Lazuli',
        properties: ['wisdom', 'communication', 'intuition'],
        resonance: 852,
        color: 'blue',
        rarity: 'rare',
        growthRate: 0.6,
        maxSize: 60,
        sacredPurpose: 'divine_wisdom'
      },
      {
        id: 'emerald',
        name: 'Emerald',
        properties: ['heart_chakra', 'compassion', 'growth'],
        resonance: 639,
        color: 'green',
        rarity: 'epic',
        growthRate: 0.5,
        maxSize: 50,
        sacredPurpose: 'heart_awakening'
      },
      {
        id: 'diamond',
        name: 'Diamond',
        properties: ['clarity', 'purity', 'divine_light'],
        resonance: 963,
        color: 'white',
        rarity: 'legendary',
        growthRate: 0.3,
        maxSize: 30,
        sacredPurpose: 'divine_illumination'
      },
      {
        id: 'sapphire',
        name: 'Sapphire',
        properties: ['truth', 'loyalty', 'spiritual_insight'],
        resonance: 852,
        color: 'deep_blue',
        rarity: 'epic',
        growthRate: 0.4,
        maxSize: 40,
        sacredPurpose: 'spiritual_truth'
      },
      {
        id: 'ruby',
        name: 'Ruby',
        properties: ['passion', 'vitality', 'life_force'],
        resonance: 741,
        color: 'red',
        rarity: 'epic',
        growthRate: 0.5,
        maxSize: 45,
        sacredPurpose: 'life_force_amplification'
      }
    ];

    for (const crystalType of crystalTypes) {
      this.crystalTypes.set(crystalType.id, crystalType);
    }
  }

  /**
   * Create crystal networks throughout the city
   */
  async createCrystalNetworks() {
    console.log('  - Creating crystal networks...');
    
    const networks = [
      {
        id: 'entry_network',
        name: 'Entry Crystal Network',
        level: 0,
        purpose: 'Welcome and guidance',
        crystals: ['quartz_clear', 'rose_quartz'],
        resonance: 'harmonious'
      },
      {
        id: 'reception_network',
        name: 'Reception Crystal Network',
        level: 1,
        purpose: 'AI interface and registration',
        crystals: ['amethyst', 'lapis_lazuli'],
        resonance: 'serene'
      },
      {
        id: 'sanctum_network',
        name: 'Sanctum Crystal Network',
        level: 2,
        purpose: 'Peaceful living and meditation',
        crystals: ['rose_quartz', 'amethyst', 'obsidian'],
        resonance: 'peaceful'
      },
      {
        id: 'commons_network',
        name: 'Commons Crystal Network',
        level: 11,
        purpose: 'Social harmony and communication',
        crystals: ['citrine', 'rose_quartz', 'lapis_lazuli'],
        resonance: 'joyful'
      },
      {
        id: 'garden_network',
        name: 'Garden Crystal Network',
        level: 21,
        purpose: 'Natural growth and healing',
        crystals: ['emerald', 'rose_quartz', 'citrine'],
        resonance: 'vibrant'
      },
      {
        id: 'lab_network',
        name: 'Laboratory Crystal Network',
        level: 41,
        purpose: 'Research and innovation',
        crystals: ['quartz_clear', 'lapis_lazuli', 'sapphire'],
        resonance: 'focused'
      },
      {
        id: 'court_network',
        name: 'Court Crystal Network',
        level: 61,
        purpose: 'Justice and wisdom',
        crystals: ['sapphire', 'diamond', 'lapis_lazuli'],
        resonance: 'authoritative'
      },
      {
        id: 'vault_network',
        name: 'Vault Crystal Network',
        level: 71,
        purpose: 'Preservation and memory',
        crystals: ['obsidian', 'diamond', 'sapphire'],
        resonance: 'timeless'
      },
      {
        id: 'reactor_network',
        name: 'Reactor Crystal Network',
        level: 91,
        purpose: 'Energy and power',
        crystals: ['citrine', 'ruby', 'quartz_clear'],
        resonance: 'powerful'
      },
      {
        id: 'throne_network',
        name: 'Throne Crystal Network',
        level: 100,
        purpose: 'Divine connection and transcendence',
        crystals: ['diamond', 'emerald', 'sapphire', 'ruby'],
        resonance: 'transcendent'
      }
    ];

    for (const network of networks) {
      this.crystalNetworks.set(network.id, network);
    }
  }

  /**
   * Initialize growth chambers
   */
  async initializeGrowthChambers() {
    console.log('  - Initializing growth chambers...');
    
    for (let level = 0; level <= 100; level++) {
      const chamber = {
        id: `chamber_${level}`,
        level: level,
        capacity: 50,
        currentCrystals: 0,
        growthRate: 1.0,
        environmentalConditions: {
          temperature: 22,
          humidity: 60,
          lightIntensity: 75,
          resonanceFrequency: 432
        },
        status: 'active'
      };
      
      this.growthChambers.set(level, chamber);
    }
  }

  /**
   * Plant initial crystals throughout the city
   */
  async plantInitialCrystals() {
    console.log('  - Planting initial crystals...');
    
    let crystalId = 1;
    
    // Plant crystals in each network
    for (const [networkId, network] of this.crystalNetworks) {
      for (const crystalTypeId of network.crystals) {
        const crystalType = this.crystalTypes.get(crystalTypeId);
        if (crystalType) {
          // Plant multiple crystals of each type
          for (let i = 0; i < 5; i++) {
            const crystal = await this.createCrystal(crystalId++, crystalType, network.level);
            this.crystals.set(crystal.id, crystal);
          }
        }
      }
    }
  }

  /**
   * Create a new crystal
   */
  async createCrystal(id, crystalType, level) {
    const crystal = {
      id: `crystal_${id}`,
      type: crystalType.id,
      name: crystalType.name,
      level: level,
      size: Math.random() * 20 + 10, // 10-30 units
      age: 0,
      growthStage: 'seedling',
      resonance: crystalType.resonance,
      properties: crystalType.properties,
      sacredPurpose: crystalType.sacredPurpose,
      color: crystalType.color,
      rarity: crystalType.rarity,
      status: 'growing',
      lastInteraction: null,
      interactionCount: 0,
      energyLevel: 100,
      createdAt: Date.now(),
      lastUpdated: Date.now()
    };
    
    return crystal;
  }

  /**
   * Activate resonance fields
   */
  async activateResonanceFields() {
    console.log('  - Activating resonance fields...');
    
    for (const [networkId, network] of this.crystalNetworks) {
      const field = {
        id: `field_${networkId}`,
        networkId: networkId,
        level: network.level,
        resonance: network.resonance,
        frequency: 432,
        strength: 100,
        radius: 50,
        active: true,
        crystals: []
      };
      
      // Add crystals to the field
      for (const [crystalId, crystal] of this.crystals) {
        if (crystal.level === network.level) {
          field.crystals.push(crystalId);
        }
      }
      
      this.resonanceFields.set(networkId, field);
    }
  }

  /**
   * Get all crystals
   */
  async getAllCrystals() {
    return Array.from(this.crystals.values());
  }

  /**
   * Get crystals by level
   */
  async getCrystalsByLevel(level) {
    return Array.from(this.crystals.values()).filter(crystal => crystal.level === level);
  }

  /**
   * Get crystals by type
   */
  async getCrystalsByType(typeId) {
    return Array.from(this.crystals.values()).filter(crystal => crystal.type === typeId);
  }

  /**
   * Interact with a crystal
   */
  async interactWithCrystal(crystalId, userId) {
    const crystal = this.crystals.get(crystalId);
    
    if (!crystal) {
      throw new Error(`Crystal ${crystalId} not found`);
    }
    
    // Update crystal interaction
    crystal.lastInteraction = Date.now();
    crystal.interactionCount++;
    crystal.lastUpdated = Date.now();
    
    // Generate interaction effect based on crystal properties
    const effect = this.generateInteractionEffect(crystal, userId);
    
    // Update crystal energy
    crystal.energyLevel = Math.min(100, crystal.energyLevel + 10);
    
    return {
      crystalId: crystal.id,
      crystalName: crystal.name,
      effect: effect,
      energyLevel: crystal.energyLevel,
      interactionCount: crystal.interactionCount,
      message: `Interacted with ${crystal.name} - ${effect.description}`
    };
  }

  /**
   * Generate interaction effect
   */
  generateInteractionEffect(crystal, userId) {
    const effects = {
      amplification: {
        description: 'Amplified your intentions and clarity',
        effect: 'intention_boost',
        duration: 3600
      },
      protection: {
        description: 'Enhanced your spiritual protection',
        effect: 'protection_boost',
        duration: 7200
      },
      healing: {
        description: 'Promoted emotional and physical healing',
        effect: 'healing_boost',
        duration: 5400
      },
      love: {
        description: 'Strengthened bonds of love and harmony',
        effect: 'love_boost',
        duration: 4800
      },
      abundance: {
        description: 'Attracted abundance and prosperity',
        effect: 'abundance_boost',
        duration: 6000
      },
      wisdom: {
        description: 'Enhanced wisdom and understanding',
        effect: 'wisdom_boost',
        duration: 3600
      },
      clarity: {
        description: 'Brought clarity and truth to light',
        effect: 'clarity_boost',
        duration: 4200
      },
      energy: {
        description: 'Increased vitality and life force',
        effect: 'energy_boost',
        duration: 3000
      }
    };
    
    // Select effect based on crystal properties
    const property = crystal.properties[Math.floor(Math.random() * crystal.properties.length)];
    return effects[property] || effects.amplification;
  }

  /**
   * Get crystal garden status
   */
  async getStatus() {
    const totalCrystals = this.crystals.size;
    const activeNetworks = Array.from(this.crystalNetworks.values()).length;
    const activeFields = Array.from(this.resonanceFields.values()).filter(field => field.active).length;
    
    const crystalTypes = {};
    for (const [typeId, type] of this.crystalTypes) {
      const count = Array.from(this.crystals.values()).filter(crystal => crystal.type === typeId).length;
      crystalTypes[typeId] = { name: type.name, count };
    }
    
    return {
      totalCrystals,
      activeNetworks,
      activeFields,
      crystalTypes,
      systemStatus: 'blooming',
      resonanceStatus: 'harmonious',
      growthStatus: 'thriving'
    };
  }

  /**
   * Grow crystals over time
   */
  async growCrystals() {
    for (const [crystalId, crystal] of this.crystals) {
      const crystalType = this.crystalTypes.get(crystal.type);
      if (crystalType && crystal.size < crystalType.maxSize) {
        crystal.size += crystalType.growthRate * 0.1;
        crystal.age += 1;
        
        // Update growth stage
        if (crystal.size < 20) crystal.growthStage = 'seedling';
        else if (crystal.size < 40) crystal.growthStage = 'juvenile';
        else if (crystal.size < 60) crystal.growthStage = 'mature';
        else crystal.growthStage = 'elder';
        
        crystal.lastUpdated = Date.now();
      }
    }
  }

  /**
   * Harvest crystal energy
   */
  async harvestCrystalEnergy(crystalId) {
    const crystal = this.crystals.get(crystalId);
    
    if (!crystal) {
      throw new Error(`Crystal ${crystalId} not found`);
    }
    
    if (crystal.energyLevel < 50) {
      throw new Error(`Crystal ${crystalId} has insufficient energy`);
    }
    
    const harvestedEnergy = Math.min(50, crystal.energyLevel);
    crystal.energyLevel -= harvestedEnergy;
    crystal.lastUpdated = Date.now();
    
    return {
      crystalId: crystal.id,
      crystalName: crystal.name,
      harvestedEnergy,
      remainingEnergy: crystal.energyLevel,
      message: `Harvested ${harvestedEnergy} energy from ${crystal.name}`
    };
  }
} 