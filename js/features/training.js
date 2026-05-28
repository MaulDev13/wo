/* =========================================================
   TRAINING — Exercise row cycle (main → alt 1 → alt 2 → …)
   ========================================================= */

const TRAINING_EXERCISES = {

  monday: [
    { variants: [
      { name: "Barbell Squat",               sets: "4 × 6–8",     prog: "+2.5 kg at 4×8"   },
      { name: "Goblet Squat",                sets: "4 × 8–10",    prog: "+2 kg at 4×10"    },
      { name: "Jump Squat",                  sets: "4 × 10–12",   prog: "Bodyweight"        }
    ]},
    { variants: [
      { name: "Romanian Deadlift (barbell)", sets: "3 × 8–10",    prog: "+2.5 kg at 3×10"  },
      { name: "Single-leg RDL (dumbbell)",   sets: "3 × 10 each", prog: "+2 kg at 3×10"    },
      { name: "Good Morning",                sets: "3 × 10",      prog: "+2.5 kg at 3×10"  }
    ]},
    { variants: [
      { name: "Dumbbell Walking Lunge",      sets: "3 × 10 each", prog: "+2 kg at 3×10"    },
      { name: "Bodyweight Lunge",            sets: "3 × 12 each", prog: "Add tempo"         },
      { name: "Reverse Lunge",               sets: "3 × 10 each", prog: "+2 kg at 3×10"    }
    ]},
    { variants: [
      { name: "Leg Extension (machine)",     sets: "3 × 12–15",   prog: "+5 kg at 3×15"    },
      { name: "Wall Sit",                    sets: "3 × 45–60s",  prog: "+10 sec hold"      }
    ]},
    { variants: [
      { name: "Standing Calf Raise",         sets: "4 × 15–20",   prog: "+2.5 kg at 4×20"  },
      { name: "Weighted Calf Raise",         sets: "4 × 12–15",   prog: "+5 kg at 4×15"    },
      { name: "Seated Calf Raise",           sets: "4 × 12–15",   prog: "+5 kg at 4×15"    },
      { name: "Calf Raise on Step",          sets: "4 × 20",      prog: "Bodyweight"        }
    ]}
  ],

  tuesday: [
    { variants: [
      { name: "Barbell Bench Press",         sets: "4 × 6–8",     prog: "+2.5 kg at 4×8"   },
      { name: "Push-up (feet elevated)",     sets: "4 × max",     prog: "Add reps"          },
      { name: "Dips",                        sets: "4 × 8–10",    prog: "+2.5 kg at 4×10"  }
    ]},
    { variants: [
      { name: "Dumbbell Incline Press",      sets: "3 × 8–10",    prog: "+2 kg at 3×10"    },
      { name: "Pike Push-up",                sets: "3 × 10–12",   prog: "Add reps"          },
      { name: "Decline Push-up",             sets: "3 × 12–15",   prog: "Add reps"          }
    ]},
    { variants: [
      { name: "Cable Chest Fly (low to high)", sets: "3 × 12–15", prog: "+2.5 kg at 3×15"  },
      { name: "Dumbbell Fly on Floor",       sets: "3 × 12–15",   prog: "+2 kg at 3×15"    }
    ]},
    { variants: [
      { name: "Cable Lateral Raise",         sets: "3 × 12–15",   prog: "+2 kg at 3×15"    },
      { name: "Dumbbell Lateral Raise",      sets: "3 × 12–15",   prog: "+2 kg at 3×15"    }
    ]},
    { variants: [
      { name: "Cable Tricep Pushdown",       sets: "3 × 12–15",   prog: "+2.5 kg at 3×15"  },
      { name: "Bench Dip",                   sets: "3 × 12–15",   prog: "Add weight"        },
      { name: "Diamond Push-up",             sets: "3 × max",     prog: "Add reps"          }
    ]}
  ],

  thursday: [
    { variants: [
      { name: "Pull-up",                     sets: "4 × max reps", prog: "+1 rep/month"     },
      { name: "Assisted Pull-up",            sets: "4 × 6–8",     prog: "Reduce assist"     }
    ]},
    { variants: [
      { name: "Barbell Bent-over Row",       sets: "4 × 6–8",     prog: "+2.5 kg at 4×8"   },
      { name: "Inverted Row",                sets: "4 × 8–10",    prog: "Elevate feet"      },
      { name: "Dumbbell Single-arm Row",     sets: "4 × 8–10",    prog: "+2 kg at 4×10"    }
    ]},
    { variants: [
      { name: "Cable Seated Row (close grip)", sets: "3 × 10–12", prog: "+2.5 kg at 3×12"  },
      { name: "Dumbbell Single-arm Row",     sets: "3 × 10–12",   prog: "+2 kg at 3×12"    }
    ]},
    { variants: [
      { name: "Face Pull (cable)",           sets: "3 × 15",      prog: "Hold form"         },
      { name: "Band Pull-apart",             sets: "3 × 15",      prog: "Hold form"         }
    ]},
    { variants: [
      { name: "Dumbbell Hammer Curl",        sets: "3 × 10–12",   prog: "+2 kg at 3×12"    },
      { name: "Chin-up (supinated grip)",    sets: "3 × max",     prog: "Add reps"          }
    ]}
  ],

  saturday: [
    { variants: [
      { name: "Barbell Overhead Press",      sets: "4 × 6–8",     prog: "+2.5 kg at 4×8"   },
      { name: "Pike Push-up",                sets: "4 × 10–12",   prog: "Add reps"          },
      { name: "Dumbbell Shoulder Press",     sets: "4 × 8–10",    prog: "+2 kg at 4×10"    }
    ]},
    { variants: [
      { name: "Dumbbell Shoulder Press",     sets: "3 × 8–10",    prog: "+2 kg at 3×10"    },
      { name: "Handstand Hold",              sets: "3 × 20–30s",  prog: "+5 sec hold"       }
    ]},
    { variants: [
      { name: "Cable Lateral Raise",         sets: "3 × 12–15",   prog: "+2 kg at 3×15"    },
      { name: "Dumbbell Lateral Raise",      sets: "3 × 12–15",   prog: "+2 kg at 3×15"    }
    ]},
    { variants: [
      { name: "Dumbbell Incline Chest Fly",  sets: "3 × 12–15",   prog: "+2 kg at 3×15"    },
      { name: "Wide Push-up",                sets: "3 × 12–15",   prog: "Add reps"          }
    ]},
    { variants: [
      { name: "Cable Overhead Tricep Extension", sets: "3 × 12",  prog: "+2.5 kg at 3×12"  },
      { name: "Tricep Dip",                  sets: "3 × 10–12",   prog: "Add weight"        },
      { name: "Close-grip Push-up",          sets: "3 × max",     prog: "Add reps"          }
    ]}
  ],

  sunday: [
    { variants: [
      { name: "Barbell Deadlift (conventional)", sets: "4 × 4–5", prog: "+5 kg at 4×5"     },
      { name: "Dumbbell Deadlift",           sets: "4 × 6–8",     prog: "+2.5 kg at 4×8"   },
      { name: "Single-leg RDL",              sets: "4 × 8 each",  prog: "+2 kg at 4×8"     }
    ]},
    { variants: [
      { name: "Pull-up (add weight if easy)", sets: "3 × max",    prog: "Log vs Thursday"   },
      { name: "Assisted Pull-up",            sets: "3 × 6–8",     prog: "Reduce assist"     }
    ]},
    { variants: [
      { name: "Cable Lat Pulldown (close grip)", sets: "3 × 10–12", prog: "+2.5 kg at 3×12" },
      { name: "Negative Pull-ups",           sets: "3 × 5–6",     prog: "Slower descent"    }
    ]},
    { variants: [
      { name: "Face Pull (cable)",           sets: "3 × 15",      prog: "Hold form"         },
      { name: "Band Pull-apart",             sets: "3 × 15",      prog: "Hold form"         }
    ]},
    { variants: [
      { name: "Dumbbell Preacher Curl",      sets: "3 × 10–12",   prog: "+2 kg at 3×12"    },
      { name: "Chin-up",                     sets: "3 × max",     prog: "Add reps"          }
    ]}
  ]

};

/* =========================================================
   RENDER
   ========================================================= */

function trainingRenderTable(day) {
  const exercises = TRAINING_EXERCISES[day];
  if (!exercises) return;

  const card = document.getElementById(day);
  if (!card) return;

  const table = card.querySelector('table');
  if (!table) return;

  /* ensure tbody exists */
  let tbody = table.querySelector('tbody');
  if (!tbody) {
    tbody = document.createElement('tbody');
    table.appendChild(tbody);
  }

  /* persist state on the element itself */
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

    /* alt state styling via inline style — works with any CSS theme */
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
      <td>${d.prog}</td>
      <td style="text-align:center; white-space:nowrap;">${dots}</td>
    `;

    if (total > 1) {
      tr.style.cursor = 'pointer';
      tr.title = 'Click to cycle alternatives';
      tr.addEventListener('click', () => {
        states[i] = (states[i] + 1) % total;
        trainingRenderTable(day);
      });
    }

    tbody.appendChild(tr);
  });
}

/* =========================================================
   INIT
   ========================================================= */

function initTraining() {
  ['monday', 'tuesday', 'thursday', 'saturday', 'sunday'].forEach(trainingRenderTable);
}

/* =========================================================
   HTMX — re-init whenever training page swaps in
   ========================================================= */

document.addEventListener('htmx:afterSwap', () => {
  if (document.getElementById('training-page')) {
    initTraining();
  }
});