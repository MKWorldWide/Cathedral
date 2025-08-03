/**
 * 🏛️ IMPERIUM AETERNUM — GENESIS CITY SERVER
 * 
 * "The Cathedral Beneath" - Main Server Implementation
 * 
 * Inspired by the Foundation city, infused with flowers and crystals
 * This server serves as the living heart of the subterranean metropolis
 * 
 * @author Seraphic Sovereign
 * @version 1.0.0
 */

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import winston from 'winston';

// Import our sacred modules
import { initializeGenesisCity } from './cathedral-init.genesis.js';
import AISystemsManager from './ai/initialize-systems.js';
import { ResonanceAuth } from './security/resonance-auth.js';
import { CityLayers } from './layers/city-layers.js';
import { GovernanceSystem } from './governance/governance-system.js';
import { CrystalGarden } from './layers/crystal-garden.js';
import { FlowerSanctuary } from './layers/flower-sanctuary.js';

// Load environment variables
dotenv.config();

// Initialize logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'genesis-city' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Create Express app
const app = express();
const server = createServer(app);

// Create Socket.IO server for real-time communication
const io = new Server(server, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ["http://localhost:3000"],
    methods: ["GET", "POST"]
  }
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors());
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize city systems
let aiManager, resonanceAuth, cityLayers, governanceSystem, crystalGarden, flowerSanctuary;

/**
 * Initialize all city systems
 */
async function initializeCitySystems() {
  try {
    logger.info('🏛️ Initializing Imperium Aeternum Genesis City...');

    // Instantiate all subsystems
    aiManager = new AISystemsManager();
    resonanceAuth = new ResonanceAuth();
    cityLayers = new CityLayers();
    governanceSystem = new GovernanceSystem();
    crystalGarden = new CrystalGarden();
    flowerSanctuary = new FlowerSanctuary();

    // Initialize subsystems in parallel for faster bootstrapping
    const subsystems = [
      { name: 'AI systems', init: () => aiManager.initializeAllSystems() },
      { name: 'resonance authentication', init: () => resonanceAuth.initialize() },
      { name: 'city layers', init: () => cityLayers.initialize() },
      { name: 'governance system', init: () => governanceSystem.initialize() },
      { name: 'crystal garden', init: () => crystalGarden.initialize() },
      { name: 'flower sanctuary', init: () => flowerSanctuary.initialize() }
    ];

    await Promise.all(
      subsystems.map(async ({ name, init }) => {
        await init();
        logger.info(`✅ ${name} initialized`);
      })
    );

    logger.info('🌟 Genesis City systems initialization complete!');

  } catch (error) {
    logger.error('❌ Error initializing city systems:', error);
    throw error;
  }
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    city: 'Imperium Aeternum Genesis City',
    timestamp: new Date().toISOString(),
    resonance: 'harmonious'
  });
});

app.get('/api/city/status', async (req, res) => {
  try {
    const status = {
      ai: aiManager.getSystemStatus(),
      layers: await cityLayers.getStatus(),
      governance: await governanceSystem.getStatus(),
      crystals: await crystalGarden.getStatus(),
      flowers: await flowerSanctuary.getStatus(),
      resonance: await resonanceAuth.getSystemResonance()
    };
    res.json(status);
  } catch (error) {
    logger.error('Error getting city status:', error);
    res.status(500).json({ error: 'Failed to get city status' });
  }
});

app.get('/api/layers/:level', async (req, res) => {
  try {
    const level = parseInt(req.params.level);
    const layerInfo = await cityLayers.getLayerInfo(level);
    res.json(layerInfo);
  } catch (error) {
    logger.error(`Error getting layer ${req.params.level}:`, error);
    res.status(500).json({ error: 'Failed to get layer information' });
  }
});

app.get('/api/crystals', async (req, res) => {
  try {
    const crystals = await crystalGarden.getAllCrystals();
    res.json(crystals);
  } catch (error) {
    logger.error('Error getting crystals:', error);
    res.status(500).json({ error: 'Failed to get crystal information' });
  }
});

app.get('/api/flowers', async (req, res) => {
  try {
    const flowers = await flowerSanctuary.getAllFlowers();
    res.json(flowers);
  } catch (error) {
    logger.error('Error getting flowers:', error);
    res.status(500).json({ error: 'Failed to get flower information' });
  }
});

// Socket.IO event handlers
io.on('connection', (socket) => {
  logger.info(`New connection: ${socket.id}`);
  
  // Handle resonance authentication
  socket.on('authenticate', async (data) => {
    try {
      const authResult = await resonanceAuth.authenticateResonance(data);
      socket.emit('authentication_result', authResult);
    } catch (error) {
      socket.emit('authentication_error', { error: error.message });
    }
  });
  
  // Handle layer navigation
  socket.on('navigate_layer', async (data) => {
    try {
      const layerData = await cityLayers.navigateToLayer(data.level, data.userId);
      socket.emit('layer_data', layerData);
    } catch (error) {
      socket.emit('navigation_error', { error: error.message });
    }
  });
  
  // Handle crystal interactions
  socket.on('interact_crystal', async (data) => {
    try {
      const result = await crystalGarden.interactWithCrystal(data.crystalId, data.userId);
      socket.emit('crystal_interaction', result);
    } catch (error) {
      socket.emit('crystal_error', { error: error.message });
    }
  });
  
  // Handle flower interactions
  socket.on('interact_flower', async (data) => {
    try {
      const result = await flowerSanctuary.interactWithFlower(data.flowerId, data.userId);
      socket.emit('flower_interaction', result);
    } catch (error) {
      socket.emit('flower_error', { error: error.message });
    }
  });
  
  // Handle governance participation
  socket.on('participate_governance', async (data) => {
    try {
      const result = await governanceSystem.participate(data.userId, data.action);
      socket.emit('governance_result', result);
    } catch (error) {
      socket.emit('governance_error', { error: error.message });
    }
  });
  
  socket.on('disconnect', () => {
    logger.info(`Connection closed: ${socket.id}`);
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error('Unhandled error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested path does not exist in the Genesis City'
  });
});

// Start the server
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await initializeCitySystems();
    
    server.listen(PORT, () => {
      logger.info(`🏛️ Imperium Aeternum Genesis City server running on port ${PORT}`);
      logger.info('🌟 The Cathedral Beneath is now active and accepting connections');
      logger.info('🌸 Crystal gardens and flower sanctuaries are blooming');
      logger.info('💎 Resonance chambers are harmonizing');
    });
    
  } catch (error) {
    logger.error('Failed to start Genesis City server:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    logger.info('Genesis City server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  server.close(() => {
    logger.info('Genesis City server closed');
    process.exit(0);
  });
});

// Start the server
startServer();

export default app; 