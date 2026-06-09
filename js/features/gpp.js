/* =========================================================
   GPP BENCHMARKS
   ========================================================= */

const GPP_BENCHMARKS = {

  bodyweight: [

    {
      category: "Push",
      benchmarks: [
        { name: "Push-up",      beginner: "5 reps",   intermediate: "20 reps",  advanced: "30 reps",   elite: "50+ reps"  },
        { name: "Dips",         beginner: "3 reps",   intermediate: "8 reps",   advanced: "15 reps",   elite: "25+ reps"  },
        { name: "Ring Push-up", beginner: "3 reps",   intermediate: "10 reps",  advanced: "20 reps",   elite: "35+ reps"  },
      ]
    },

    {
      category: "Pull",
      benchmarks: [
        { name: "Pull-up",      beginner: "1 rep",    intermediate: "5 reps",   advanced: "10 reps",   elite: "20+ reps"  },
        { name: "Chin-up",      beginner: "2 reps",   intermediate: "6 reps",   advanced: "12 reps",   elite: "22+ reps"  },
        { name: "Inverted Row", beginner: "5 reps",   intermediate: "12 reps",  advanced: "20 reps",   elite: "35+ reps"  },
      ]
    },

    {
      category: "Core",
      benchmarks: [
        { name: "Plank",        beginner: "20 sec",   intermediate: "60 sec",   advanced: "120 sec",   elite: "300+ sec"  },
        { name: "Hollow Hold",  beginner: "10 sec",   intermediate: "45 sec",   advanced: "90 sec",    elite: "180+ sec"  },
        { name: "L-Sit",        beginner: "3 sec",    intermediate: "10 sec",   advanced: "30 sec",    elite: "60+ sec"   },
      ]
    },

    {
      category: "Grip",
      benchmarks: [
        { name: "Dead Hang",    beginner: "10 sec",   intermediate: "30 sec",   advanced: "60 sec",    elite: "120+ sec"  },
        { name: "Towel Hang",   beginner: "5 sec",    intermediate: "20 sec",   advanced: "45 sec",    elite: "90+ sec"   },
      ]
    },

    {
      category: "Cardio",
      benchmarks: [
        { name: "2.4 km Run",   beginner: "> 18 min", intermediate: "< 15 min", advanced: "< 12 min",  elite: "< 9 min"   },
        { name: "Cooper Test",  beginner: "< 1200 m", intermediate: "> 1800 m", advanced: "> 2400 m",  elite: "> 3000 m"  },
        { name: "5 km Run",     beginner: "> 40 min", intermediate: "< 35 min", advanced: "< 30 min",  elite: "< 22 min"  },
      ]
    },

    {
      category: "Conditioning",
      benchmarks: [
        { name: "Burpee Test",     beginner: "< 15 reps", intermediate: "30 reps",  advanced: "50 reps / 3 min", elite: "75+ reps"  },
        { name: "100 Air Squats",  beginner: "> 12 min",  intermediate: "< 8 min",  advanced: "< 5 min",         elite: "< 3 min"   },
        { name: "500 m Row",       beginner: "> 3 min",   intermediate: "< 2:30",   advanced: "< 2 min",         elite: "< 1:40"    },
      ]
    },

    {
      category: "Skill",
      benchmarks: [
        { name: "Handstand Hold",  beginner: "1 sec",    intermediate: "10 sec",   advanced: "30 sec",    elite: "60+ sec"   },
        { name: "Wall Handstand",  beginner: "5 sec",    intermediate: "30 sec",   advanced: "60 sec",    elite: "120+ sec"  },
        { name: "L-Sit",           beginner: "1 sec",    intermediate: "8 sec",    advanced: "20 sec",    elite: "45+ sec"   },
      ]
    },

    {
      category: "Mobility",
      benchmarks: [
        { name: "Toe Touch",       beginner: "Knees",    intermediate: "Shins",    advanced: "Full Reach",  elite: "Palms flat"       },
        { name: "Deep Squat Hold", beginner: "10 sec",   intermediate: "30 sec",   advanced: "60 sec",      elite: "120+ sec"         },
        { name: "Overhead Reach",  beginner: "Limited",  intermediate: "Partial",  advanced: "Full ROM",    elite: "Full ROM + stable" },
      ]
    },

  ],

  external: [

    {
      category: "Squat",
      benchmarks: [
        { name: "Back Squat",        beginner: "0.5× BW",  intermediate: "1.0× BW",  advanced: "1.5× BW",   elite: "2.0× BW"  },
        { name: "Front Squat",       beginner: "0.4× BW",  intermediate: "0.75× BW", advanced: "1.25× BW",  elite: "1.75× BW" },
      ]
    },

    {
      category: "Hinge",
      benchmarks: [
        { name: "Deadlift",          beginner: "0.75× BW", intermediate: "1.25× BW", advanced: "2× BW",     elite: "2.5× BW"  },
        { name: "Trap Bar Deadlift", beginner: "0.75× BW", intermediate: "1.25× BW", advanced: "2× BW",     elite: "2.5× BW"  },
        { name: "Romanian DL",       beginner: "0.5× BW",  intermediate: "1.0× BW",  advanced: "1.5× BW",   elite: "2.0× BW"  },
      ]
    },

    {
      category: "Horizontal Push",
      benchmarks: [
        { name: "Bench Press",       beginner: "0.4× BW",  intermediate: "0.75× BW", advanced: "1.0× BW",   elite: "1.5× BW"  },
        { name: "Weighted Dip",      beginner: "BW only",  intermediate: "+10% BW",  advanced: "+25% BW",   elite: "+50% BW"  },
      ]
    },

    {
      category: "Vertical Push",
      benchmarks: [
        { name: "Overhead Press",    beginner: "0.25× BW", intermediate: "0.5× BW",  advanced: "0.75× BW",  elite: "1.25× BW" },
        { name: "Push Press",        beginner: "0.4× BW",  intermediate: "0.75× BW", advanced: "1.0× BW",   elite: "1.5× BW"  },
      ]
    },

    {
      category: "Carry",
      benchmarks: [
        { name: "Farmer Carry",      beginner: "20% BW/h", intermediate: "35% BW/h", advanced: "50% BW/h",  elite: "75% BW/h" },
        { name: "Suitcase Carry",    beginner: "30% BW",   intermediate: "50% BW",   advanced: "75% BW",    elite: "1× BW"    },
      ]
    },

    {
      category: "Power",
      benchmarks: [
        { name: "KB Swing",          beginner: "30r @16kg", intermediate: "60r @20kg", advanced: "100r @24kg", elite: "100r @32kg" },
        { name: "Power Clean",       beginner: "0.4× BW",  intermediate: "0.75× BW", advanced: "1× BW",     elite: "1.25× BW"  },
      ]
    },

  ],

  enhanced: [

    {
      category: "Push",
      benchmarks: [
        { name: "Push-up",           beginner: "30 reps",  intermediate: "40 reps",  advanced: "50 reps",   elite: "100+ reps" },
        { name: "Dips",              beginner: "15 reps",  intermediate: "20 reps",  advanced: "25 reps",   elite: "40+ reps"  },
        { name: "Archer Push-up",    beginner: "3 reps",   intermediate: "8 reps",   advanced: "12 reps",   elite: "20+ reps"  },
      ]
    },

    {
      category: "Pull",
      benchmarks: [
        { name: "Pull-up",           beginner: "10 reps",  intermediate: "12 reps",  advanced: "15 reps",   elite: "25+ reps"  },
        { name: "Chin-up",           beginner: "12 reps",  intermediate: "15 reps",  advanced: "18 reps",   elite: "28+ reps"  },
        { name: "Weighted Pull-up",  beginner: "+5% BW",   intermediate: "+15% BW",  advanced: "+25% BW",   elite: "+50% BW"   },
      ]
    },

    {
      category: "Core",
      benchmarks: [
        { name: "Plank",             beginner: "120 sec",  intermediate: "150 sec",  advanced: "180 sec",   elite: "5 min+"    },
        { name: "L-Sit",             beginner: "20 sec",   intermediate: "30 sec",   advanced: "45 sec",    elite: "90+ sec"   },
        { name: "Dragon Flag",       beginner: "1 rep",    intermediate: "5 reps",   advanced: "10 reps",   elite: "20+ reps"  },
      ]
    },

    {
      category: "Grip",
      benchmarks: [
        { name: "Dead Hang",         beginner: "60 sec",   intermediate: "75 sec",   advanced: "90 sec",    elite: "3 min+"    },
        { name: "Farmer Carry",      beginner: "0.5× BW",  intermediate: "0.75× BW", advanced: "BW total",  elite: "1.5× BW"  },
      ]
    },

    {
      category: "Cardio",
      benchmarks: [
        { name: "2.4 km Run",        beginner: "< 12 min", intermediate: "< 11 min", advanced: "< 10 min",  elite: "< 8 min"   },
        { name: "5 km Run",          beginner: "< 30 min", intermediate: "< 27 min", advanced: "< 25 min",  elite: "< 20 min"  },
      ]
    },

    {
      category: "Conditioning",
      benchmarks: [
        { name: "Burpee Test",       beginner: "50 reps",  intermediate: "60 reps",  advanced: "75 reps / 3 min", elite: "100+ reps" },
        { name: "500 m Row",         beginner: "< 2 min",  intermediate: "< 1:50",   advanced: "< 1:40",    elite: "< 1:25"    },
      ]
    },

  ],

};

/* =========================================================
   STATE
   ========================================================= */

const GPP_STATE = {};

function initState() {
  for (const section in GPP_BENCHMARKS) {
    GPP_STATE[section] = {};
  }
}

/* =========================================================
   PILLS
   ========================================================= */

const PILL = {
  beginner:     'background:rgba(148,163,184,.15);color:var(--muted,#64748b);',
  intermediate: 'background:rgba(251,191,36,.15);color:#b45309;',
  advanced:     'background:rgba(34,197,94,.15);color:#16a34a;',
  elite:        'background:rgba(59,130,246,.15);color:#2563eb;',
};

function pill(style, text) {
  return `<span style="display:inline-block;padding:.15em .6em;border-radius:999px;font-size:.78rem;font-weight:500;${style}">${text}</span>`;
}

/* =========================================================
   RENDER
   ========================================================= */

function renderGPPTable(section) {

  const groups = GPP_BENCHMARKS[section];
  if (!groups) return;

  const card = document.getElementById(section);
  if (!card) return;

  const tbody = card.querySelector('tbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  groups.forEach((group) => {

    const categoryTag = `<span class="tag">${group.category}</span>`;

    group.benchmarks.forEach((b, bi) => {

      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${bi === 0 ? categoryTag : ''}</td>
        <td>${b.name}</td>
        <td>${pill(PILL.beginner, b.beginner)}</td>
        <td>${pill(PILL.intermediate, b.intermediate)}</td>
        <td>${pill(PILL.advanced, b.advanced)}</td>
        <td>${pill(PILL.elite, b.elite)}</td>
      `;

      tbody.appendChild(tr);

    });

    /* ── visual separator between groups ── */
    const sep = document.createElement('tr');
    sep.innerHTML = '<td colspan="6" style="padding:0;border:none;height:6px;"></td>';
    tbody.appendChild(sep);

  });

}

/* =========================================================
   INIT
   ========================================================= */

function initGPPBenchmarks() {

  initState();

  Object.keys(GPP_BENCHMARKS).forEach(renderGPPTable);

}

/* =========================================================
   HTMX
   ========================================================= */

document.addEventListener('htmx:afterSwap', () => {

  if (document.getElementById('gpp-benchmark-page')) {
    initGPPBenchmarks();
  }

});