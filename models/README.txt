MANTIS 3D — models (ALREADY INSTALLED)
======================================

These 9 models are already downloaded here and wired into the site. No action
needed. By default they render as polished BLACK & SILVER metal (mechanical look)
on the black-themed scene, and the mantis is dropped onto the floor and faces the
camera (swiveling to track the cursor). Add ?raw to the URL to see them in their
original textures instead.

FILE             SECTION     SOURCE (Poly Pizza, CC-BY)
mantis.glb       (hero)      "Praying Mantis" by Lorenzo Cinalli
spider.glb       Systems     "Giant Spider" by Thomas DR
grasshopper.glb  Process     "Grasshopper" by Poly by Google
ant.glb          Platform    "Ant" by Poly by Google
ladybug.glb      Results     "Ladybug" by Poly by Google
moth.glb         Voices      "Lil' Moth" by Lee Mason
bee.glb          Pricing     "Bee" by jeremy
dragonfly.glb    Questions   "Dragonfly" by Poly by Google
centipede.glb    Deploy      "Centipede" by Poly by Google

LICENSE: all from poly.pizza, Creative Commons Attribution (CC-BY). Commercial use
is fine WITH credit — keep an attribution/credits line when you publish.

RUN IT  (models can't load from a double-clicked file:// page)
  cd "C:\Users\Jibra\OneDrive\Desktop\Automation"
  node serve-mantis.js
  open  http://localhost:4599

SWAP ANY MODEL
  Replace a file here with your own .glb of the same name (or change the SECTIONS
  list / MANTIS.file at the top of MANTIS 3D.html). Anything you drop in is auto
  recolored + scaled + placed.

WANT THE EXACT BLACK-MECHANICAL LOOK FROM YOUR PHOTOS?
  Generate from the reference PNGs (one bug per run), export GLB, overwrite the
  file of the same name:
    Hunyuan3D-2 : https://huggingface.co/spaces/tencent/Hunyuan3D-2
    TRELLIS     : https://huggingface.co/spaces/trellis-community/TRELLIS

CLAWS FOLLOWING THE CURSOR  (rigged-model path — chosen)
  The current free mantis is one fused mesh (no skeleton), so right now the whole
  mantis turns to track the cursor. For TRUE independent claws (cursor-side claw
  tracks, other claw frozen in its hunting pose) drop in a RIGGED mantis:

  1. Get a rigged praying-mantis .glb (armature with foreleg bones). Options:
       - Sketchfab "Praying Mantis Rigged in pose" by Cordy
         https://sketchfab.com/3d-models/praying-mantis-rigged-in-pose-dc23e3ae716e47fd95a7824e5fdeade6
         (must show a "Download 3D Model" button = free; check its license)
       - Sketchfab: search "praying mantis", filter Downloadable + Animated/Rigged
       - TurboSquid / CGTrader "free rigged praying mantis" (export glTF/GLB)
     When downloading from Sketchfab choose glTF (.glb), keep the armature.
  2. Save it here as  mantis.glb  (overwrite the existing one).
  3. Run the site, open  http://localhost:4599/?inspect , open the browser console
     (F12) — it prints the model's MESHES and BONES.
  4. Send me that bone list (or the two foreleg/claw bone names). I'll set
     MANTIS.clawLeft / clawRight / clawAimAxis and the claws will work: the
     cursor-side one tracks, the other stays still in its hunting pose.
     (The code is already wired — it just needs the real bone names.)

THE MANTIS IS PROCEDURAL (default)
  The centerpiece mantis is now built in code (black & silver metal) so its two
  claws move individually: the cursor-side claw strikes toward the cursor while the
  other holds dead-still in a raised hunting pose. mantis.glb is NOT used unless you
  add ?glb to the URL (then it loads + recolors your mantis.glb instead).
  The 8 bug nav models below are still loaded from their .glb files.

OPTIONS
  (default)  procedural black & silver mantis; bug models recolored to match
  ?glb       use models/mantis.glb instead of the procedural mantis
  ?raw       keep each model's original textures/colors
  ?inspect   log every model's node/bone names to the browser console
