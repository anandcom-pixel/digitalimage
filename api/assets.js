// Serverless Function: /api/assets
// Universal Cloud Database Persistence (Vercel KV / Supabase REST)
// Supports all artwork assets, categories, and exhibition metadata

const INITIAL_SEED_ASSETS = [
      {
        id: 'art-001',
        title: 'Stippled Constellations of Kyoto',
        category: 'Pointillism & Stippling',
        shortDesc: 'A serene Japanese pagoda enveloped in millions of hand-calculated ink dots forming celestial star clusters.',
        fullDesc: 'A masterclass in modern digital pointillism, combining classical George Seurat techniques with Japanese Edo woodblock compositions. The celestial nebula is composed entirely of micro-stippled point coordinates with varied ink densities.',
        imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
        tags: ['pointillism', 'stippling', 'kyoto', 'celestial', 'dotwork', 'woodblock'],
        model: 'Midjourney v6.1 (Niji Stipple Profile)',
        prompt: 'Traditional wooden pagoda in Kyoto, millions of fine stippling dots, George Seurat pointillist technique, starry cosmic indigo night sky, gold dust particle accents, crisp micro details --ar 16:9 --stylize 700 --v 6.1',
        resolution: '3840 × 2160 (4K UHD)',
        aspectRatio: '16:9',
        date: '2026-10-14',
        license: 'Extended Commercial License',
        status: 'Available for License',
        palette: ['#0B132B', '#1C2541', '#475569', '#E2D4B7', '#F8FAFC']
      },
      {
        id: 'art-002',
        title: 'Voxel Botanica & Micro-Dots',
        category: 'Pointillism & Stippling',
        shortDesc: 'A macro botanical study rendered through stippled pollen particles and organic dot structures.',
        fullDesc: 'Explores the botanical morphology of exotic flora through high-frequency stippling. The color graduation relies solely on optical color mixing of miniature dot clusters.',
        imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
        tags: ['botanical', 'stippling', 'flora', 'macro', 'optical-mixing', 'organic'],
        model: 'Flux.1 Dev (Fine-Tuned Macro Dot)',
        prompt: 'Extreme close up of rare botanical orchid petals, intricate monochrome stippling with emerald and gold accents, stipple shading, botanical scientific etching --ar 1:1',
        resolution: '3072 × 3072 (1:1 Square)',
        aspectRatio: '1:1',
        date: '2026-10-20',
        license: 'Fine Art Print License',
        status: 'Print Ready',
        palette: ['#064E3B', '#047857', '#10B981', '#FDE047', '#ECFDF5']
      },
      {
        id: 'art-003',
        title: 'Chromatic Fluidity No. 7',
        category: 'Abstract',
        shortDesc: 'Swirling ribbons of liquid chrome and refractive neon pigments suspended in zero gravity.',
        fullDesc: 'Simulating complex multi-viscosity fluid dynamics with subsurface scattering. Spectral chromatic dispersion radiates across the glossy curves, creating a hypnotic sense of movement.',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
        tags: ['abstract', 'chromatic', 'liquid-chrome', 'fluid-art', 'spectral', '3d-render'],
        model: 'Midjourney v6.1 (Subsurface Diffusion)',
        prompt: 'Abstract liquid chrome fluid art with vibrant neon magenta and cyan iridescent swirls, volumetric caustics, cinematic studio lighting, Octane render 8k --ar 16:9',
        resolution: '4096 × 2304 (4K DCI)',
        aspectRatio: '16:9',
        date: '2026-11-01',
        license: 'Worldwide Commercial',
        status: 'Available for License',
        palette: ['#3A0CA3', '#4361EE', '#4CC9F0', '#F72585', '#7209B7']
      },
      {
        id: 'art-004',
        title: 'Quantum Lattice Reverie',
        category: 'Abstract',
        shortDesc: 'A holographic geometric prism lattice pulsating with mathematical fractals and laser refractions.',
        fullDesc: 'An exploration of multidimensional geometry where intersecting planes refract light into crystalline spectrums. Built on recursive generative math sequences.',
        imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
        tags: ['abstract', 'lattice', 'fractal', 'holographic', 'prism', 'geometric'],
        model: 'Stable Diffusion XL (SDXL Turbo)',
        prompt: 'Futuristic prism lattice, sacred geometry, iridescent refraction, glowing quantum grid, transparent glass facets, ray tracing --ar 1:1',
        resolution: '3840 × 3840 (1:1)',
        aspectRatio: '1:1',
        date: '2026-10-28',
        license: 'Creative Commons (CC BY 4.0)',
        status: 'Free Blueprint',
        palette: ['#0F172A', '#38BDF8', '#818CF8', '#C084FC', '#F472B6']
      },
      {
        id: 'art-005',
        title: 'Ethereal Solitude: Nordic Fjords',
        category: 'Landscapes',
        shortDesc: 'Atmospheric twilight over icy Scandinavian fjords with auroral reflections dancing on still glacial waters.',
        fullDesc: 'Captures the serene grandeur of untouched Nordic wilderness at dusk. The interplay between warm wooden hut illumination and cold glacial blue creates sublime visual tension.',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        tags: ['landscapes', 'nordic', 'fjords', 'aurora', 'cinematic', 'twilight'],
        model: 'Midjourney v6.1 (Photorealism Pipeline)',
        prompt: 'Breathtaking Nordic fjord at twilight, mirrored glacial waters, distant emerald aurora borealis, tiny warm cabin light on the shore, 70mm anamorphic lens --ar 16:9',
        resolution: '5120 × 2880 (5K Master)',
        aspectRatio: '16:9',
        date: '2026-10-18',
        license: 'Fine Art Limited Edition',
        status: 'Print Ready',
        palette: ['#0F172A', '#1E293B', '#3B82F6', '#06B6D4', '#E2E8F0']
      },
      {
        id: 'art-006',
        title: 'Cyber-Oasis Dune 2099',
        category: 'Landscapes',
        shortDesc: 'Sweeping desert dunes sheltering a glowing terraformed biodome sanctuary under a twin-moon sky.',
        fullDesc: 'A futuristic landscape synthesis envisioning post-planetary habitations. Fine wind-sculpted sand ripples meet high-tensile glass geodesic structures glowing in the dusk.',
        imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        tags: ['landscapes', 'sci-fi', 'desert', 'dunes', 'oasis', 'biodome'],
        model: 'Flux.1 Pro (Landscape Synthesis)',
        prompt: 'Vast golden sand dunes at sunset, giant illuminated holographic geodesic biosphere dome in the distance, two crescent moons in indigo sky, hyper detailed --ar 16:9',
        resolution: '4096 × 2304 (16:9)',
        aspectRatio: '16:9',
        date: '2026-11-03',
        license: 'Extended Commercial License',
        status: 'Available for License',
        palette: ['#BC6C25', '#DDA15E', '#283618', '#606C38', '#FEFAE0']
      },
      {
        id: 'art-007',
        title: 'Solaris Empress in Obsidian & Gold',
        category: 'Portraits',
        shortDesc: 'Regal cybernetic portrait featuring kintsugi gold filigree, obsidian headpiece, and piercing gaze.',
        fullDesc: 'Merging traditional Japanese lacquer art and kintsugi philosophy with cybernetic royalty. Gold leaf cracks trace porcelain-like facial contours with photographic skin texture.',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
        tags: ['portraits', 'kintsugi', 'gold-leaf', 'obsidian', 'cybernetic', 'editorial'],
        model: 'Midjourney v6.1 (Studio Editorial)',
        prompt: 'Portrait of royal empress with glossy obsidian crown, delicate gold kintsugi cracks on cheekbones, golden amber eyes, dramatic chiaroscuro studio lighting, Vogue editorial --ar 3:4',
        resolution: '3072 × 4096 (3:4 High-Res)',
        aspectRatio: '3:4',
        date: '2026-10-25',
        license: 'Master Fine Art License',
        status: 'Available for License',
        palette: ['#18181B', '#D97706', '#F59E0B', '#FEF3C7', '#451A03']
      },
      {
        id: 'art-008',
        title: 'Neon Renaissance Cyber-Muse',
        category: 'Portraits',
        shortDesc: 'A classical oil-painting aesthetic interwoven with subtle bioluminescent fiber optics.',
        fullDesc: 'Inspired by Caravaggio and Da Vinci lighting models, this portrait juxtaposes heavy velvet textures with ultra-fine fiber optic threads woven directly into hair locks.',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
        tags: ['portraits', 'renaissance', 'oil-painting', 'cyber-muse', 'fiber-optics', 'chiaroscuro'],
        model: 'Flux.1 Dev (Classic Realism)',
        prompt: 'Renaissance oil painting of thoughtful muse, subtle glowing neon violet threads in dark curly hair, rich oil glaze texture, chiaroscuro lighting, masterwork --ar 3:4',
        resolution: '3000 × 4000 (3:4)',
        aspectRatio: '3:4',
        date: '2026-11-04',
        license: 'Print Ready License',
        status: 'Print Ready',
        palette: ['#312E81', '#4F46E5', '#A855F7', '#FBBF24', '#FAF5FF']
      },
      {
        id: 'art-009',
        title: 'Aero-Spire Metropolis 2140',
        category: 'Concept Art',
        shortDesc: 'Kilometer-tall cloud cities connected by magnetic suspension bridges and sky gardens.',
        fullDesc: 'A production-level architectural concept study exploring vertical ecology and aerodynamic skyline design in the year 2140. Includes solar envelope simulations.',
        imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
        tags: ['concept-art', 'metropolis', 'futuristic', 'solarpunk', 'architecture', 'aerospire'],
        model: 'DALL-E 3 (Architectural Matte)',
        prompt: 'Futuristic aerospire metropolis rising above fluffy white clouds, magnetic monorails crossing between spires, lush sky gardens, clean solar glass architecture, golden morning light --ar 16:9',
        resolution: '3840 × 2160 (16:9)',
        aspectRatio: '16:9',
        date: '2026-10-30',
        license: 'Film & Game Production License',
        status: 'Available for License',
        palette: ['#0F172A', '#0284C7', '#38BDF8', '#F8FAFC', '#F59E0B']
      },
      {
        id: 'art-010',
        title: 'Subterranean Bioluminescent Sanctum',
        category: 'Concept Art',
        shortDesc: 'An underground crystal cavern illuminated by glowing flora, waterfalls, and ancient petroglyphs.',
        fullDesc: 'Worldbuilding concept art for an ancient underground biome. The subterranean river carries bioluminescent algae illuminating crystalline stalactites and mystical ruins.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        tags: ['concept-art', 'bioluminescent', 'cavern', 'underground', 'crystals', 'fantasy'],
        model: 'Midjourney v6.1 (Worldbuilder)',
        prompt: 'Giant underground cave cathedral, cascading glowing emerald waterfalls, bioluminescent fungi and crystals, turquoise subterranean lake, cinematic depth of field --ar 16:9',
        resolution: '4096 × 2304 (16:9)',
        aspectRatio: '16:9',
        date: '2026-11-06',
        license: 'Creative Commons (CC BY-SA 4.0)',
        status: 'Free Blueprint',
        palette: ['#064E3B', '#059669', '#34D399', '#6EE7B7', '#A7F3D0']
      }
    ];

if (!globalThis._galleryAssetsStore) {
  globalThis._galleryAssetsStore = [...INITIAL_SEED_ASSETS];
}

// Safe Merge Utility: preserves historical records and merges updates by ID
function safeMergeAssets(existingList = [], incomingData = [], meta = {}) {
  const existing = Array.isArray(existingList) ? [...existingList] : [];
  const incoming = Array.isArray(incomingData)
    ? incomingData
    : (incomingData && typeof incomingData === 'object' ? [incomingData] : []);

  // 1. Explicit delete action: remove specified asset by ID
  if (meta && meta.action === 'delete' && meta.id != null) {
    return existing.filter(item => String(item.id) !== String(meta.id));
  }

  // 2. Explicit reset action
  if (meta && meta.action === 'reset') {
    return [...INITIAL_SEED_ASSETS];
  }

  // 3. Index existing records
  const mergedMap = new Map();
  const order = [];

  for (const item of existing) {
    if (item && item.id != null) {
      const id = String(item.id);
      mergedMap.set(id, { ...item });
      order.push(id);
    }
  }

  // 4. Merge incoming records
  for (const item of incoming) {
    if (!item || item.id == null) continue;
    const id = String(item.id);
    if (mergedMap.has(id)) {
      const prev = mergedMap.get(id);
      mergedMap.set(id, {
        ...prev,
        ...item,
        updatedAt: new Date().toISOString()
      });
    } else {
      mergedMap.set(id, {
        ...item,
        createdAt: item.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      order.unshift(id);
    }
  }

  // 5. Build stable merged list
  const result = [];
  const seen = new Set();
  for (const id of order) {
    if (!seen.has(id) && mergedMap.has(id)) {
      seen.add(id);
      result.push(mergedMap.get(id));
    }
  }
  for (const [id, item] of mergedMap.entries()) {
    if (!seen.has(id)) {
      seen.add(id);
      result.push(item);
    }
  }

  return result;
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch (e) { return {}; }
  }
  return new Promise((resolve) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); } catch (err) { resolve({}); }
    });
    req.on('error', () => resolve({}));
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const KV_URL = process.env.KV_REST_API_URL;
  const KV_TOKEN = process.env.KV_REST_API_TOKEN;
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (req.method === 'GET') {
    // 1. Try Vercel KV if configured
    if (KV_URL && KV_TOKEN) {
      try {
        const kvRes = await fetch(`${KV_URL}/get/gallery_assets`, {
          headers: { Authorization: `Bearer ${KV_TOKEN}` }
        });
        if (kvRes.ok) {
          const kvData = await kvRes.json();
          if (kvData && kvData.result) {
            const parsed = typeof kvData.result === 'string' ? JSON.parse(kvData.result) : kvData.result;
            if (Array.isArray(parsed) && parsed.length > 0) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                source: 'vercel-kv',
                count: parsed.length,
                data: parsed,
                updatedAt: new Date().toISOString()
              }));
              return;
            }
          }
        }
      } catch (kvErr) {
        console.warn('[Vercel KV Read Warning]', kvErr);
      }
    }

    // 2. Try Supabase if configured
    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        const supaRes = await fetch(`${SUPABASE_URL}/rest/v1/gallery_assets?select=*&order=id.asc`, {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`
          }
        });
        if (supaRes.ok) {
          const supaData = await supaRes.json();
          if (Array.isArray(supaData) && supaData.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({
              success: true,
              source: 'supabase',
              count: supaData.length,
              data: supaData,
              updatedAt: new Date().toISOString()
            }));
            return;
          }
        }
      } catch (supaErr) {
        console.warn('[Supabase Read Warning]', supaErr);
      }
    }

    // 3. Fallback to resilient in-memory store
    const store = globalThis._galleryAssetsStore && globalThis._galleryAssetsStore.length > 0
      ? globalThis._galleryAssetsStore
      : INITIAL_SEED_ASSETS;

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({
      success: true,
      source: 'memory-store',
      count: store.length,
      data: store,
      updatedAt: new Date().toISOString()
    }));
    return;
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      const body = await readBody(req);
      const data = body.asset ? [body.asset] : (body.assets || body.data);
      const meta = body.meta || { action: body.action, id: body.id };

      // Enforce lightweight payload validation to prevent Vercel 4.5MB request payload errors
      if (data && Array.isArray(data)) {
        for (const item of data) {
          if (item && item.imageUrl) {
            const urlStr = String(item.imageUrl).trim();
            if (urlStr.startsWith('data:image/') || urlStr.length > 8192) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 400;
              res.end(JSON.stringify({
                success: false,
                error: 'Payload size error: Base64 binary image uploads are disallowed to prevent Vercel 4.5MB payload limit errors. Please provide a direct HTTP/HTTPS Image URL (e.g. CDN, Imgur, GitHub raw link).'
              }));
              return;
            }
          }
        }
      }

      let existingRecords = globalThis._galleryAssetsStore || [...INITIAL_SEED_ASSETS];

      // Read latest KV snapshot before merging if available
      if (KV_URL && KV_TOKEN) {
        try {
          const kvRes = await fetch(`${KV_URL}/get/gallery_assets`, {
            headers: { Authorization: `Bearer ${KV_TOKEN}` }
          });
          if (kvRes.ok) {
            const kvData = await kvRes.json();
            if (kvData && kvData.result) {
              const parsed = typeof kvData.result === 'string' ? JSON.parse(kvData.result) : kvData.result;
              if (Array.isArray(parsed) && parsed.length > 0) {
                existingRecords = parsed;
              }
            }
          }
        } catch (kvErr) {
          console.warn('[Vercel KV Pre-fetch Warning]', kvErr);
        }
      }

      // Safe merge: merge incoming data into existing records
      const merged = safeMergeAssets(existingRecords, data, meta);
      globalThis._galleryAssetsStore = merged;

      // Persist to Vercel KV
      if (KV_URL && KV_TOKEN) {
        try {
          await fetch(`${KV_URL}/set/gallery_assets`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${KV_TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(merged)
          });
        } catch (kvErr) {
          console.warn('[Vercel KV Write Warning]', kvErr);
        }
      }

      // Persist to Supabase if configured
      if (SUPABASE_URL && SUPABASE_KEY) {
        try {
          await fetch(`${SUPABASE_URL}/rest/v1/gallery_assets`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'resolution=merge-duplicates'
            },
            body: JSON.stringify(merged)
          });
        } catch (supaErr) {
          console.warn('[Supabase Write Warning]', supaErr);
        }
      }

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify({
        success: true,
        action: meta.action || 'safe_merge',
        count: merged.length,
        data: merged,
        updatedAt: new Date().toISOString()
      }));
      return;
    } catch (err) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ success: false, error: err.message }));
      return;
    }
  }

  res.statusCode = 405;
  res.end('Method Not Allowed');
}
