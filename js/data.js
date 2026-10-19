/* =========================================================
   P2J Industries — catalogue data
   ---------------------------------------------------------
   One place for every product and machine shown on
   products.html, machines.html and product-detail.html.

   ALL PRICES AND SPECIFICATIONS BELOW ARE DUMMY PLACEHOLDERS.
   Replace them with real values; set `confirmed: true` on an
   item once its price/specs are final to remove the
   "indicative" label on the site.

   Images: drop a real photo at
     Images/Products/<item id>.jpg   (products)
     Images/Machines/<item id>.jpg   (machines)
   e.g. Images/Machines/construction-mixer-machine.jpg
   Until then a dummy image is shown automatically.

   Item id = "<category id>-<item slug>", e.g. gadgets-smart-watch
   ========================================================= */
(function () {
  // item(slug, name, icon, price, specs, description?)
  const item = (slug, name, icon, price, specs, desc) => ({ slug, name, icon, price, specs, desc });

  const PRODUCTS = [
    { id: "gadgets", name: "Gadgets", code: "GD", icon: "fa-headphones", warranty: "1 year",
      blurb: "Everyday smart gadgets for the modern home and workspace.",
      items: [
        item("smart-watch", "Smart Watch", "fa-clock", 2999, { "Display": '1.8" AMOLED', "Battery": "Up to 7 days", "Connectivity": "Bluetooth 5.3", "Water Resistance": "IP67", "Weight": "38 g" }),
        item("wireless-earbuds", "Wireless Earbuds", "fa-headphones", 1799, { "Driver": "10 mm dynamic", "Playtime": "24 h with case", "Connectivity": "Bluetooth 5.3", "Charging": "USB Type-C", "Weight": "45 g with case" }),
        item("bluetooth-speaker", "Bluetooth Speaker", "fa-volume-high", 2499, { "Output": "16 W", "Battery": "12 h", "Water Resistance": "IPX6", "Connectivity": "Bluetooth 5.0 + AUX", "Weight": "540 g" }),
        item("mobile-accessories", "Mobile Accessories Kit", "fa-mobile-screen", 899, { "Contents": "Charger, cable, stand", "Charger Output": "20 W PD", "Cable": "1 m braided Type-C", "Colour": "Black" }),
        item("smart-home-device", "Smart Home Plug", "fa-house-signal", 1299, { "Load": "10 A / 2200 W", "Control": "Wi-Fi app & voice", "Compatibility": "Alexa, Google Home", "Input": "230 V AC" }),
        item("other-gadgets", "LED Desk Lamp", "fa-lightbulb", 1499, { "Power": "8 W LED", "Brightness": "3 levels", "Colour Temperature": "3000–6000 K", "Input": "USB Type-C" })
      ] },
    { id: "kitchen-baskets", name: "Kitchen Baskets", code: "KB", icon: "fa-basket-shopping", warranty: "2 years",
      blurb: "Stainless-steel baskets sized for standard modular kitchen cabinets.",
      items: [
        item("pull-out-basket", "Pull-Out Basket", "fa-basket-shopping", 4500, { "Material": "SS 304", "Size": "600 × 450 × 150 mm", "Load": "25 kg", "Finish": "Mirror polish", "Fitting": "Soft-close channel" }),
        item("cutlery-basket", "Cutlery Basket", "fa-utensils", 3200, { "Material": "SS 304", "Size": "450 × 450 × 100 mm", "Compartments": "6", "Load": "15 kg", "Finish": "Mirror polish" }),
        item("corner-basket", "Corner Basket", "fa-border-top-left", 9800, { "Material": "SS 304", "Cabinet": "900 mm corner", "Type": "Magic corner, 2-tier", "Load": "20 kg per tier", "Finish": "Chrome" }),
        item("vegetable-basket", "Vegetable Basket", "fa-carrot", 3800, { "Material": "SS 304", "Size": "600 × 450 × 200 mm", "Design": "Ventilated wire", "Load": "20 kg", "Finish": "Mirror polish" }),
        item("plate-basket", "Plate Basket", "fa-plate-wheat", 4200, { "Material": "SS 304", "Size": "600 × 450 × 150 mm", "Capacity": "24 plates", "Load": "20 kg", "Finish": "Mirror polish" }),
        item("storage-basket", "Storage Basket", "fa-box-archive", 3600, { "Material": "SS 304", "Size": "450 × 450 × 150 mm", "Use": "Bottles & jars", "Load": "18 kg", "Finish": "Mirror polish" })
      ] },
    { id: "kitchen-utilities", name: "Kitchen Utilities", code: "KU", icon: "fa-blender", warranty: "1 year",
      blurb: "Racks, holders and storage that keep a kitchen organised.",
      items: [
        item("kitchen-organizer", "Kitchen Organizer", "fa-layer-group", 1499, { "Material": "Powder-coated MS", "Size": "450 × 250 × 400 mm", "Tiers": "3", "Finish": "Matte black" }),
        item("storage-container", "Storage Container Set", "fa-jar", 899, { "Material": "Food-grade PP", "Set": "6 containers", "Capacity": "500 ml – 1.5 L", "Lids": "Airtight" }),
        item("cooking-accessories", "Cooking Accessories Set", "fa-kitchen-set", 1199, { "Material": "SS 304 + nylon", "Pieces": "7", "Heat Resistance": "Up to 210 °C", "Finish": "Brushed steel" }),
        item("kitchen-rack", "Kitchen Rack", "fa-bars-staggered", 2799, { "Material": "SS 202", "Size": "600 × 300 × 750 mm", "Tiers": "4", "Load": "40 kg total" }),
        item("utensil-holder", "Utensil Holder", "fa-spoon", 699, { "Material": "SS 304", "Diameter": "120 mm", "Height": "160 mm", "Base": "Anti-slip" }),
        item("other-kitchen-utilities", "Wall Hook Rail", "fa-grip-lines", 549, { "Material": "SS 304", "Length": "600 mm", "Hooks": "8 movable", "Mounting": "Screw-fixed" })
      ] },
    { id: "gym-equipment", name: "Gym Equipment", code: "GE", icon: "fa-dumbbell", warranty: "1 year",
      blurb: "Strength and fitness equipment for home and commercial gyms.",
      items: [
        item("dumbbell-set", "Hex Dumbbell Set (10 kg)", "fa-dumbbell", 3800, { "Weight": "10 kg (pair)", "Material": "Rubber-coated cast iron", "Handle": "Chrome knurled grip", "Shape": "Hexagonal, anti-roll" }),
        item("weight-plates", "Weight Plates", "fa-circle-dot", 2600, { "Weight": "2 × 10 kg", "Material": "Rubber-coated", "Bore": "28 mm", "Finish": "Matte black" }),
        item("barbell", "Barbell Rod", "fa-grip-lines", 3400, { "Length": "1.5 m", "Bar Diameter": "28 mm", "Material": "Chrome-plated steel", "Max Load": "150 kg" }),
        item("weight-bench", "Adjustable Weight Bench", "fa-couch", 7900, { "Positions": "Flat / incline / decline", "Frame": "Powder-coated steel", "Max Load": "250 kg", "Size": "1250 × 500 × 450 mm" }),
        item("kettlebell", "Kettlebell", "fa-weight-hanging", 1600, { "Weight": "12 kg", "Material": "Cast iron, vinyl-coated", "Handle": "Wide grip", "Base": "Flat" }),
        item("fitness-accessories", "Fitness Accessories Kit", "fa-person-running", 999, { "Contents": "Mat, bands, skipping rope", "Mat": "6 mm NBR", "Bands": "3 resistance levels", "Bag": "Included" })
      ] },
    { id: "tools", name: "Tools", code: "TL", icon: "fa-screwdriver-wrench", warranty: "1 year",
      blurb: "Hand and power tools for workshops, sites and homes.",
      items: [
        item("hand-tool", "Hand Tool Kit", "fa-toolbox", 1499, { "Pieces": "24", "Material": "Chrome-vanadium steel", "Case": "Blow-moulded", "Includes": "Pliers, screwdrivers, hammer" }),
        item("power-tool", "Cordless Drill", "fa-screwdriver", 4299, { "Voltage": "12 V Li-ion", "Chuck": "10 mm keyless", "Torque": "28 Nm", "Speeds": "2" }),
        item("cutting-tool", "Cutting Tool Set", "fa-scissors", 2199, { "Contents": "Hacksaw, snips, cutter", "Material": "HSS / carbon steel", "Pieces": "5", "Grip": "Rubberised" }),
        item("measuring-tool", "Measuring Tool Set", "fa-ruler-combined", 899, { "Contents": "Tape, square, level", "Tape": "5 m", "Level": "300 mm spirit", "Square": "200 mm" }),
        item("wrench-set", "Wrenches & Spanners Set", "fa-wrench", 1799, { "Sizes": "6–22 mm", "Pieces": "12", "Type": "Combination", "Material": "Cr-V steel" }),
        item("workshop-tool", "Bench Vice", "fa-industry", 3499, { "Jaw Width": "125 mm", "Opening": "150 mm", "Material": "Cast iron", "Base": "Swivel" })
      ] },
    { id: "wire-trays", name: "Wire Trays", code: "WT", icon: "fa-table-cells", warranty: "1 year",
      blurb: "Cable trays and fittings for industrial and commercial wiring.",
      items: [
        item("perforated-cable-tray", "Perforated Cable Tray", "fa-table-cells", 1850, { "Material": "Pre-galvanised steel", "Size": "300 × 50 mm", "Length": "2.5 m", "Thickness": "1.6 mm" }),
        item("ladder-cable-tray", "Ladder Cable Tray", "fa-bars", 2350, { "Material": "Hot-dip galvanised", "Width": "300 mm", "Length": "2.5 m", "Rung Spacing": "250 mm" }),
        item("wire-mesh-tray", "Wire Mesh Tray", "fa-border-all", 1650, { "Material": "Electro-galvanised wire", "Size": "200 × 50 mm", "Length": "3 m", "Wire": "4.5 mm" }),
        item("cable-tray-bend", "Cable Tray Bend", "fa-turn-up", 950, { "Angle": "90°", "Width": "300 mm", "Material": "Pre-galvanised steel", "Thickness": "1.6 mm" }),
        item("cable-tray-connector", "Cable Tray Connector", "fa-link", 120, { "Type": "Straight coupler", "Material": "Galvanised steel", "Includes": "Nuts & bolts", "Pack": "Per piece" }),
        item("cable-management-accessories", "Cable Management Kit", "fa-plug", 450, { "Contents": "Clamps, ties, covers", "Material": "Galvanised steel + nylon", "Pieces": "50", "Use": "Tray fixing" })
      ] },
    { id: "child-utilities", name: "Child Utilities", code: "CU", icon: "fa-baby", warranty: "1 year",
      blurb: "Sturdy, child-safe furniture and storage for kids.",
      items: [
        item("child-chair", "Children's Chair", "fa-chair", 1999, { "Age": "3–8 years", "Frame": "Powder-coated steel", "Seat Height": "300 mm", "Max Load": "40 kg" }),
        item("study-table", "Study Table", "fa-table", 4999, { "Age": "4–12 years", "Top": "Laminated board", "Size": "800 × 500 × 550 mm", "Storage": "1 drawer" }),
        item("storage-organizer", "Storage Organizer", "fa-boxes-stacked", 1799, { "Bins": "6 removable", "Frame": "Powder-coated steel", "Size": "600 × 300 × 750 mm", "Colours": "Assorted" }),
        item("kids-utility-rack", "Kids' Utility Rack", "fa-bars-staggered", 2499, { "Tiers": "4", "Frame": "Powder-coated steel", "Size": "500 × 300 × 900 mm", "Edges": "Rounded, child-safe" }),
        item("childrens-storage", "Children's Toy Box", "fa-box-open", 1599, { "Capacity": "60 L", "Material": "Steel + fabric lining", "Lid": "Soft-close", "Size": "600 × 400 × 400 mm" }),
        item("other-child-utilities", "Kids' Shoe Rack", "fa-shoe-prints", 1299, { "Tiers": "3", "Pairs": "Up to 9", "Frame": "Powder-coated steel", "Size": "600 × 250 × 500 mm" })
      ] },
    { id: "wall-decors", name: "Wall Decors", code: "WD", icon: "fa-leaf", warranty: "1 year",
      blurb: "Metal wall art, panels and shelves to finish any space.",
      items: [
        item("decorative-wall-panel", "Decorative Wall Panel", "fa-border-all", 2999, { "Material": "Laser-cut MS", "Size": "900 × 600 mm", "Finish": "Powder-coated", "Mounting": "Concealed brackets" }),
        item("metal-wall-art", "Metal Wall Art", "fa-leaf", 3499, { "Material": "MS, gold finish", "Size": "1000 × 500 mm", "Design": "Leaf motif", "Mounting": "Wall hooks" }),
        item("decorative-wall-shelf", "Decorative Wall Shelf", "fa-grip-lines", 1899, { "Material": "MS + wood", "Size": "600 × 200 mm", "Shelves": "2", "Load": "10 kg per shelf" }),
        item("wall-mounted-planter", "Wall-Mounted Planter", "fa-seedling", 1299, { "Material": "Powder-coated MS", "Pots": "3 included", "Size": "500 × 150 × 400 mm", "Use": "Indoor / outdoor" }),
        item("geometric-wall-decor", "Geometric Wall Decor", "fa-shapes", 2199, { "Material": "MS wire frame", "Size": "700 × 700 mm", "Pieces": "3", "Finish": "Matte black" }),
        item("other-wall-decorations", "Wall Clock (Metal)", "fa-clock", 1499, { "Material": "MS frame", "Diameter": "500 mm", "Movement": "Silent sweep", "Battery": "1 × AA" })
      ] },
    { id: "common-utilities", name: "Common Utilities", code: "UT", icon: "fa-trash-can", warranty: "1 year",
      blurb: "Bins, racks and stands for everyday household use.",
      items: [
        item("storage-container", "Storage Container", "fa-box", 999, { "Material": "Galvanised steel", "Capacity": "25 L", "Lid": "Lockable", "Finish": "Powder-coated" }),
        item("storage-rack", "Utility Rack", "fa-bars-staggered", 2999, { "Tiers": "5", "Material": "Powder-coated MS", "Size": "900 × 400 × 1800 mm", "Load": "50 kg per tier" }),
        item("household-organizer", "Household Organizer", "fa-layer-group", 1199, { "Compartments": "4", "Material": "Powder-coated MS", "Size": "450 × 300 × 350 mm", "Mounting": "Free-standing" }),
        item("multipurpose-stand", "Multipurpose Stand", "fa-table-columns", 1799, { "Tiers": "3", "Material": "SS 202", "Size": "500 × 350 × 900 mm", "Wheels": "4 lockable castors" }),
        item("utility-bin", "Pedal Utility Bin", "fa-trash-can", 899, { "Capacity": "12 L", "Material": "SS 202", "Operation": "Foot pedal", "Inner Bucket": "Removable" }),
        item("other-everyday-utilities", "Cloth Drying Stand", "fa-shirt", 1999, { "Material": "SS 202", "Drying Length": "15 m", "Size (open)": "1400 × 600 × 1000 mm", "Foldable": "Yes" })
      ] }
  ];

  const MACHINES = [
    { id: "construction", name: "Construction Machines", code: "CN", icon: "fa-trowel-bricks", warranty: "18 months",
      blurb: "Site-grade lifting, mixing and material-handling machines.",
      items: [
        item("mixer-machine", "Mixer Machine", "fa-trowel-bricks", 125000, { "Capacity": "200 L", "Power": "5 HP", "Drum": "Heavy-gauge MS", "Mobility": "Wheels + tow hitch", "Weight": "Approx. 380 kg" }),
        item("lifting-machine", "Lifting Machine", "fa-arrow-up-from-ground-water", 165000, { "Lifting Capacity": "500 kg", "Lift Height": "30 m", "Motor": "3 HP", "Rope": "8 mm steel wire", "Weight": "Approx. 420 kg" }),
        item("concrete-vibrator", "Concrete Vibrator", "fa-wave-square", 18500, { "Motor": "2 HP", "Needle Diameter": "60 mm", "Shaft Length": "4 m", "Frequency": "12,000 vpm", "Weight": "Approx. 28 kg" }),
        item("block-making-machine", "Block Making Machine", "fa-cubes", 385000, { "Output": "1,200 blocks per shift", "Block Size": "400 × 200 × 200 mm", "Power": "7.5 HP", "Operation": "Semi-automatic", "Weight": "Approx. 1,600 kg" }),
        item("bar-bending-unit", "Bar Bending Unit", "fa-bezier-curve", 145000, { "Max Bar Size": "32 mm", "Power": "3 HP", "Bend Angle": "0–180°", "Operation": "Foot pedal", "Weight": "Approx. 390 kg" }),
        item("scaffolding-hoist", "Scaffolding Hoist", "fa-elevator", 98000, { "Capacity": "300 kg", "Lift Height": "25 m", "Motor": "2 HP", "Brake": "Electromagnetic", "Weight": "Approx. 180 kg" })
      ] },
    { id: "industrial", name: "Industrial Machines", code: "IN", icon: "fa-industry", warranty: "18 months",
      blurb: "Bending, shearing and fabrication machinery for production floors.",
      items: [
        item("iron-worker", "Iron Worker", "fa-industry", 425000, { "Punching": "Ø 26 mm in 16 mm plate", "Flat Shearing": "16 × 250 mm", "Angle Cutting": "100 × 100 × 10 mm", "Drive": "Hydraulic, 7.5 HP", "Weight": "Approx. 1,800 kg" }),
        item("bending-machine", "Bending Machine", "fa-bezier-curve", 275000, { "Max Bend": "40 mm", "Power": "5.5 HP", "Type": "Hydraulic", "Bend Angle": "0–180°", "Weight": "Approx. 650 kg" }),
        item("cutting-machine", "Cutting Machine", "fa-compact-disc", 95000, { "Disc Size": "355 mm", "Power": "3 HP", "Cut Type": "Metal / SS", "Vice": "Quick-lock", "Weight": "Approx. 120 kg" }),
        item("shearing-machine", "Shearing Machine", "fa-scissors", 360000, { "Cutting Length": "2,500 mm", "Plate Thickness": "6 mm MS", "Power": "7.5 HP", "Back Gauge": "750 mm", "Weight": "Approx. 3,200 kg" }),
        item("drilling-machine", "Radial Drilling Machine", "fa-screwdriver", 210000, { "Drilling Capacity": "40 mm", "Arm Length": "1,000 mm", "Spindle Speeds": "8", "Power": "3 HP", "Weight": "Approx. 1,400 kg" }),
        item("press-brake", "Hydraulic Press Brake", "fa-compress", 650000, { "Capacity": "63 tonnes", "Bending Length": "2,500 mm", "Stroke": "100 mm", "Power": "7.5 HP", "Weight": "Approx. 4,500 kg" })
      ] },
    { id: "painting", name: "Painting Machines", code: "PT", icon: "fa-spray-can", warranty: "18 months",
      blurb: "Coating, plating and curing equipment for finishing lines.",
      items: [
        item("powder-coating-machine", "Powder Coating Machine", "fa-spray-can", 185000, { "Gun Type": "Electrostatic", "Output Voltage": "100 kV", "Powder Hopper": "45 L", "Power": "230 V, 1 phase", "Weight": "Approx. 60 kg" }),
        item("plastic-coating-machine", "Plastic Coating Machine", "fa-fill-drip", 220000, { "Process": "Fluidised bed dipping", "Tank Size": "1,200 × 600 × 800 mm", "Heating": "Electric, 12 kW", "Coating": "PE / PVC powder", "Weight": "Approx. 450 kg" }),
        item("electro-plating-unit", "Electro Plating Unit", "fa-bolt", 340000, { "Rectifier": "500 A, 12 V DC", "Tanks": "6-stage line", "Tank Material": "PP lined", "Plating": "Zinc / nickel / chrome", "Weight": "Approx. 900 kg" }),
        item("dryer", "Industrial Dryer / Curing Oven", "fa-temperature-high", 260000, { "Chamber": "2,000 × 1,500 × 1,800 mm", "Max Temperature": "250 °C", "Heating": "Electric, 24 kW", "Airflow": "Re-circulating", "Weight": "Approx. 1,100 kg" }),
        item("spray-booth", "Paint Spray Booth", "fa-wind", 295000, { "Booth Size": "3,000 × 2,500 × 2,500 mm", "Filtration": "Dry filter", "Exhaust Fan": "3 HP", "Lighting": "LED, explosion-proof", "Weight": "Approx. 800 kg" }),
        item("pretreatment-tank", "Pre-treatment Tank Line", "fa-water", 175000, { "Tanks": "7-tank process", "Tank Size": "1,500 × 800 × 900 mm", "Material": "MS, FRP lined", "Heating": "Optional", "Weight": "Approx. 1,200 kg" })
      ] },
    { id: "specialised", name: "Specialised Machines", code: "SP", icon: "fa-microchip", warranty: "18 months",
      blurb: "Purpose-built machines for specific fabrication jobs.",
      items: [
        item("punching-cutting-machine", "Punching & Cutting Machine", "fa-circle-dot", 280000, { "Punching": "Ø 22 mm in 10 mm plate", "Cutting": "Flat up to 12 mm", "Drive": "Hydraulic, 5 HP", "Stations": "2", "Weight": "Approx. 950 kg" }),
        item("adjustable-tools-cutting-machine", "Adjustable Tools Cutting Machine", "fa-sliders", 235000, { "Cutting Range": "Adjustable, 10–150 mm", "Angle": "0–45°", "Power": "3 HP", "Feed": "Manual / auto", "Weight": "Approx. 600 kg" }),
        item("pipe-bending-machine", "Pipe Bending Machine", "fa-bezier-curve", 190000, { "Pipe Range": "Ø 12–50 mm", "Bend Angle": "0–180°", "Power": "3 HP", "Drive": "Hydraulic", "Weight": "Approx. 520 kg" }),
        item("profile-cutting-machine", "CNC Profile Cutting Machine", "fa-microchip", 875000, { "Cutting Area": "1,500 × 3,000 mm", "Process": "Plasma / oxy-fuel", "Controller": "CNC", "Max Thickness": "25 mm (plasma)", "Weight": "Approx. 1,500 kg" }),
        item("rolling-machine", "Plate Rolling Machine", "fa-rotate", 420000, { "Plate Width": "1,250 mm", "Thickness": "6 mm MS", "Rolls": "3-roll", "Power": "5 HP", "Weight": "Approx. 2,100 kg" }),
        item("spm-welding-machine", "Special-Purpose Welding Machine", "fa-fire-flame-simple", 310000, { "Process": "MIG, semi-automatic", "Current": "400 A", "Fixture": "Custom jig", "Power": "415 V, 3 phase", "Weight": "Approx. 700 kg" })
      ] },
    { id: "furniture", name: "Furniture Machines", code: "FU", icon: "fa-couch", warranty: "18 months",
      blurb: "Cutting, notching and forming machines for metal furniture making.",
      items: [
        item("cutting-machine", "Cutting Machine", "fa-compact-disc", 145000, { "Tube Capacity": "Up to 75 mm", "Blade": "350 mm cold saw", "Angle": "0–45°", "Power": "2 HP", "Weight": "Approx. 260 kg" }),
        item("notching-machine", "Notching Machine", "fa-scissors", 98000, { "Tube Range": "Ø 19–50 mm", "Notch Type": "Saddle / V", "Power": "2 HP", "Operation": "Pneumatic clamp", "Weight": "Approx. 210 kg" }),
        item("shearing-machine", "Shearing Machine", "fa-scissors", 175000, { "Cutting Length": "1,250 mm", "Sheet Thickness": "3 mm MS", "Power": "3 HP", "Operation": "Motorised", "Weight": "Approx. 900 kg" }),
        item("punching-machine", "Punching Machine", "fa-circle-dot", 120000, { "Capacity": "15 tonnes", "Max Hole": "Ø 20 mm", "Stroke": "40 mm", "Power": "2 HP", "Weight": "Approx. 550 kg" }),
        item("multipurpose-machine", "Multipurpose Machine", "fa-gears", 260000, { "Functions": "Cut, punch, notch, bend", "Drive": "Hydraulic, 5 HP", "Stations": "4", "Max Plate": "10 mm", "Weight": "Approx. 1,100 kg" }),
        item("tube-bending-machine", "Tube Bending Machine", "fa-bezier-curve", 135000, { "Tube Range": "Ø 16–38 mm", "Bend Angle": "0–180°", "Dies": "3 included", "Power": "2 HP", "Weight": "Approx. 320 kg" })
      ] },
    // Machines "Tools" uses id "machine-tools" internally so its item ids never clash
    // with the Products "Tools" category; its URL is still machines.html?cat=tools.
    { id: "machine-tools", urlCat: "tools", name: "Tools", code: "MT", icon: "fa-hammer", warranty: "12 months",
      blurb: "Dies, punches and tooling for iron workers and fabrication machines.",
      items: [
        item("cutting-tools", "Cutting Tools", "fa-scissors", 14500, { "Type": "Shear blades", "Material": "D2 tool steel", "Hardness": "58–60 HRC", "Fits": "P2J iron workers" }),
        item("punching-tools", "Punching Tools", "fa-circle-dot", 18500, { "Set": "Punch + die, 6 sizes", "Range": "Ø 10–26 mm", "Material": "HSS", "Fits": "P2J iron workers" }),
        item("bending-tools", "Bending Tools", "fa-bezier-curve", 16500, { "Set": "Top + bottom die", "Angle": "90° / 30°", "Length": "835 mm segmented", "Material": "42CrMo, hardened" }),
        item("notching-tools", "Notching Tools", "fa-scissors", 12500, { "Notch": "Rectangular / V", "Capacity": "10 mm plate", "Material": "D2 tool steel", "Fits": "P2J iron workers" }),
        item("die-set", "Press Tool Die Set", "fa-cubes", 45000, { "Type": "Progressive die", "Material": "D2 / EN31", "Guide": "4-pillar", "Use": "Sheet-metal blanking" }),
        item("shearing-blades", "Shearing Blade Set", "fa-grip-lines-vertical", 9500, { "Length": "2,500 mm", "Edges": "4 cutting edges", "Material": "H13 tool steel", "Fits": "P2J shearing machines" })
      ] }
  ];

  // ---- Build lookups ----
  const byId = {};
  function prepare(list, type) {
    list.forEach(cat => {
      cat.type = type;
      cat.urlCat = cat.urlCat || cat.id;
      cat.page = type === "machines" ? "machines.html" : "products.html";
      cat.listUrl = `${cat.page}?cat=${cat.urlCat}`;
      cat.items.forEach((it, i) => {
        it.id = `${cat.id}-${it.slug}`;
        it.model = `P2J-${cat.code}-${101 + i}`;
        it.cat = cat;
        it.confirmed = it.confirmed || false;
        it.image = `Images/${type === "machines" ? "Machines" : "Products"}/${it.id}.jpg`;
        it.desc = it.desc || `${it.name} from the P2J Industries ${cat.name.toLowerCase()} range. ${cat.blurb} Placeholder description — final details will be confirmed.`;
        if (byId[it.id]) console.warn("Duplicate catalogue id:", it.id);
        byId[it.id] = it;
      });
    });
  }
  prepare(PRODUCTS, "products");
  prepare(MACHINES, "machines");

  window.P2J_CATALOG = {
    products: PRODUCTS,
    machines: MACHINES,
    byId,
    category(type, urlCat) {
      return (type === "machines" ? MACHINES : PRODUCTS).find(c => c.urlCat === urlCat);
    }
  };
})();
