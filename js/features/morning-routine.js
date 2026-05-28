/* =========================================================
   MORNING ROUTINE — Exercise row cycle per day
   ========================================================= */

const MORNING_EXERCISES = {

  monday: [
    { variants: [
      { name: "Cat-cow stretch",      sets: "1 × 10 reps lambat",    note: "Mobilisasi tulang belakang, napas dalam" },
      { name: "Thread the needle",    sets: "1 × 8 per sisi",         note: "Thoracic rotation ringan" }
    ]},
    { variants: [
      { name: "Hip 90/90 stretch",    sets: "1 × 60 detik per sisi",  note: "Buka hip sebelum squat" },
      { name: "Pigeon pose",          sets: "1 × 45 detik per sisi",  note: "Alternatif hip flexor opener" }
    ]},
    { variants: [
      { name: "Dead bug",             sets: "3 × 8 reps",             note: "Lower back tetap menempel lantai" },
      { name: "Bird dog",             sets: "3 × 8 per sisi",         note: "Core stabilizer, lebih mudah dari dead bug" }
    ]},
    { variants: [
      { name: "Plank",                sets: "3 × 30 detik",           note: "Jangan sampai pinggul turun" },
      { name: "Forearm plank",        sets: "3 × 30 detik",           note: "Lebih mudah di bahu" }
    ]},
    { variants: [
      { name: "Glute bridge",         sets: "3 × 12 reps",            note: "Aktivasi glute sebelum squat" },
      { name: "Single-leg glute bridge", sets: "3 × 8 per sisi",      note: "Lebih challenging, unilateral" }
    ]}
  ],

  tuesday: [
    { variants: [
      { name: "Arm circle (forward + backward)", sets: "2 × 15 per arah", note: "Warm up bahu, perlahan dulu" },
      { name: "Shoulder rolls",       sets: "2 × 15 reps",            note: "Lebih ringan, cocok kalau bahu kaku" }
    ]},
    { variants: [
      { name: "Wall slide",           sets: "3 × 10 reps",            note: "Scapula health — penting untuk PE" },
      { name: "Band pull-apart",      sets: "3 × 15 reps",            note: "Tanpa dinding, posterior deltoid" }
    ]},
    { variants: [
      { name: "Dead bug",             sets: "3 × 10 reps",            note: "Core kontrol" },
      { name: "Bird dog",             sets: "3 × 10 per sisi",        note: "Alternatif core stabilizer" }
    ]},
    { variants: [
      { name: "Hollow body hold",     sets: "3 × 20 detik",           note: "Jaga lower back" },
      { name: "Tuck hollow hold",     sets: "3 × 20 detik",           note: "Versi lebih mudah — lutut ditekuk" }
    ]},
    { variants: [
      { name: "Plank to downward dog", sets: "3 × 8 reps",            note: "Mobilitas bahu + core sekaligus" },
      { name: "Inchworm",             sets: "3 × 6 reps",             note: "Full body mobility, lebih dinamis" }
    ]}
  ],

  wednesday: [
    { variants: [
      { name: "Jumping jack / jalan di tempat", sets: "1 × 3 menit",  note: "Warm up ringan dulu" },
      { name: "High knee march",      sets: "1 × 3 menit",            note: "Alternatif cardio ringan" }
    ]},
    { variants: [
      { name: "Plank",                sets: "3 × 45 detik",           note: "Lebih lama dari hari biasa" },
      { name: "RKC plank",            sets: "3 × 20 detik",           note: "Lebih intense — squeeze semua otot" }
    ]},
    { variants: [
      { name: "Side plank",           sets: "3 × 30 detik per sisi",  note: "Lateral core — sering terabaikan" },
      { name: "Side plank with hip dip", sets: "3 × 10 per sisi",     note: "Lebih dinamis, oblique lebih aktif" }
    ]},
    { variants: [
      { name: "Dead bug",             sets: "3 × 12 reps",            note: "Kontrol dan slow" },
      { name: "Dead bug with reach",  sets: "3 × 10 reps",            note: "Tambah reach overhead untuk lebih challenge" }
    ]},
    { variants: [
      { name: "Hollow body hold",     sets: "3 × 30 detik",           note: "Progressi dari hari Selasa" },
      { name: "Hollow body rock",     sets: "3 × 10 reps",            note: "Versi dinamis — lebih challenge" }
    ]},
    { variants: [
      { name: "Bicycle crunch",       sets: "3 × 15 per sisi",        note: "Rotational core" },
      { name: "Cross-body mountain climber", sets: "3 × 10 per sisi", note: "Lebih dinamis, cardio + core" }
    ]}
  ],

  thursday: [
    { variants: [
      { name: "Cat-cow stretch",      sets: "1 × 10 reps lambat",     note: "Mobilisasi spine sebelum rowing" },
      { name: "Child's pose",         sets: "1 × 60 detik",           note: "Spine decompression ringan" }
    ]},
    { variants: [
      { name: "Thoracic rotation (quadruped)", sets: "2 × 10 per sisi", note: "Upper back mobility untuk pull" },
      { name: "Thread the needle",    sets: "2 × 8 per sisi",          note: "Alternatif thoracic rotation" }
    ]},
    { variants: [
      { name: "Dead bug",             sets: "3 × 10 reps",            note: "Core kontrol" },
      { name: "Bird dog",             sets: "3 × 10 per sisi",        note: "Core + hip extension" }
    ]},
    { variants: [
      { name: "Hollow body hold",     sets: "3 × 25 detik",           note: "Posisi dasar pull-up yang kuat" },
      { name: "Tuck hollow hold",     sets: "3 × 25 detik",           note: "Versi lebih mudah" }
    ]},
    { variants: [
      { name: "Hanging knee raise",   sets: "3 × 10 reps",            note: "Boleh skip kalau tidak ada bar" },
      { name: "Lying leg raise",      sets: "3 × 10 reps",            note: "Alternatif tanpa pull-up bar" }
    ]}
  ],

  friday: [
    { variants: [
      { name: "Jalan kaki 10 menit", sets: "1 × 10 menit",            note: "Atau stretching dinamis ringan" },
      { name: "Marching in place",    sets: "1 × 10 menit",           note: "Kalau tidak bisa keluar" }
    ]},
    { variants: [
      { name: "Hip flexor stretch (lunge position)", sets: "2 × 60 detik per sisi", note: "Counter dari duduk seharian" },
      { name: "Couch stretch",        sets: "2 × 45 detik per sisi",  note: "Lebih intense untuk hip flexor" }
    ]},
    { variants: [
      { name: "Child's pose to cobra", sets: "2 × 10 reps lambat",    note: "Spine decompression" },
      { name: "Cat-cow stretch",      sets: "2 × 10 reps",            note: "Alternatif yang lebih dinamis" }
    ]},
    { variants: [
      { name: "Side plank",           sets: "3 × 30 detik per sisi",  note: "Lateral stability" },
      { name: "Side plank with reach", sets: "3 × 8 per sisi",        note: "Tambah reach untuk oblique" }
    ]},
    { variants: [
      { name: "Plank",                sets: "3 × 45 detik",           note: "Maintenance core" },
      { name: "Plank shoulder tap",   sets: "3 × 10 per sisi",        note: "Anti-rotation challenge" }
    ]}
  ],

  saturday: [
    { variants: [
      { name: "Wall slide",           sets: "3 × 10 reps",            note: "Scapula health sebelum OHP" },
      { name: "Band pull-apart",      sets: "3 × 15 reps",            note: "Posterior deltoid aktivasi" }
    ]},
    { variants: [
      { name: "Band pull-apart (atau tanpa band)", sets: "3 × 15 reps", note: "Posterior deltoid aktivasi" },
      { name: "Arm circle",           sets: "3 × 15 per arah",        note: "Warm up bahu lebih ringan" }
    ]},
    { variants: [
      { name: "Dead bug",             sets: "3 × 10 reps",            note: "Core kontrol" },
      { name: "Bird dog",             sets: "3 × 10 per sisi",        note: "Alternatif core stabilizer" }
    ]},
    { variants: [
      { name: "Plank",                sets: "3 × 35 detik",           note: "Stabilisasi" },
      { name: "Forearm plank",        sets: "3 × 35 detik",           note: "Lebih mudah di bahu" }
    ]},
    { variants: [
      { name: "World's greatest stretch", sets: "2 × 5 per sisi",     note: "Full body mobility dalam 1 gerakan" },
      { name: "Inchworm + hip opener", sets: "2 × 5 reps",            note: "Alternatif full body mobility" }
    ]}
  ],

  sunday: [
    { variants: [
      { name: "Cat-cow stretch",      sets: "1 × 10 reps lambat",     note: "Spine mobilization sebelum deadlift" },
      { name: "Child's pose",         sets: "1 × 60 detik",           note: "Lebih pasif, spine decompression" }
    ]},
    { variants: [
      { name: "Hip 90/90 stretch",    sets: "1 × 60 detik per sisi",  note: "Hip mobility" },
      { name: "Pigeon pose",          sets: "1 × 45 detik per sisi",  note: "Alternatif hip opener" }
    ]},
    { variants: [
      { name: "Glute bridge",         sets: "3 × 12 reps",            note: "Aktivasi glute, bukan fatigue" },
      { name: "Clamshell",            sets: "3 × 12 per sisi",        note: "Hip abductor activation, lebih ringan" }
    ]},
    { variants: [
      { name: "Dead bug",             sets: "2 × 8 reps",             note: "Lebih sedikit dari hari lain" },
      { name: "Bird dog",             sets: "2 × 8 per sisi",         note: "Alternatif lebih ringan" }
    ]},
    { variants: [
      { name: "Plank",                sets: "2 × 30 detik",           note: "Cukup — jangan sampai core lelah" },
      { name: "Dead bug",             sets: "2 × 6 reps",             note: "Versi paling ringan kalau badan berat" }
    ]}
  ]

};

/* =========================================================
   RENDER
   ========================================================= */

function morningRenderTable(day) {
  const exercises = MORNING_EXERCISES[day];
  if (!exercises) return;

  const card = document.getElementById('morning-' + day);
  if (!card) return;

  const table = card.querySelector('table');
  if (!table) return;

  let tbody = table.querySelector('tbody');
  if (!tbody) {
    tbody = document.createElement('tbody');
    table.appendChild(tbody);
  }

  if (!tbody._states) {
    tbody._states = exercises.map(() => 0);
  }
  const states = tbody._states;

  tbody.innerHTML = '';

  exercises.forEach((ex, i) => {
    const idx   = states[i];
    const total = ex.variants.length;
    const d     = ex.variants[idx];

    const tr = document.createElement('tr');

    if (idx > 0) {
      tr.style.background = 'rgba(20, 184, 166, 0.08)';
    }

    const badge = idx > 0
      ? `<span class="tag" style="margin-left:.4rem; font-size:.7rem; padding:.15rem .45rem;">alt ${idx}</span>`
      : '';

    const dots = total > 1
      ? Array.from({ length: total }, (_, k) =>
          `<span style="
            display:inline-block; width:6px; height:6px;
            border-radius:50%; margin:0 2px;
            background:${k === idx ? 'var(--primary)' : 'var(--border)'};
            transition: background .2s;
          "></span>`
        ).join('')
      : '';

    tr.innerHTML = `
      <td>${d.name}${badge}</td>
      <td>${d.sets}</td>
      <td>${d.note}</td>
      <td style="text-align:center; white-space:nowrap;">${dots}</td>
    `;

    if (total > 1) {
      tr.style.cursor = 'pointer';
      tr.title = 'Klik untuk ganti alternatif';
      tr.addEventListener('click', () => {
        states[i] = (states[i] + 1) % total;
        morningRenderTable(day);
      });
    }

    tbody.appendChild(tr);
  });
}

/* =========================================================
   INIT
   ========================================================= */

function initMorning() {
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    .forEach(morningRenderTable);
}

/* =========================================================
   HTMX hook
   ========================================================= */

document.addEventListener('htmx:afterSwap', () => {
  if (document.getElementById('morning-page')) {
    initMorning();
  }
});