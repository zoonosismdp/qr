// State management
        let currentTab = 'guia';
        let currentSimStep = 1;
        let modalQrInstance = null;
        let flipQrLibertad = null;
        let flipQrColinas = null;
        let flipQrTurno = null;
        let currentFlipMode = 'registro';

        // STEP GUIDE DATA & INTERACTIVE LOGIC
        let activeGuideStep = 1;
        let guideViewMode = 'interactivo';

        const GUIDE_STEPS = [
            {
                step: 1,
                category: 'Acceso al Sistema',
                title: 'Ingresar al Sistema MDQ Digital',
                desc: 'Ingresá con tu usuario y clave a <strong>autenticar.mardelplata.gob.ar</strong>. Si todavía no tenés usuario registrado, podés darte de alta en el portal o consultar presencialmente en los polideportivos habilitados.',
                keyPoint: 'Tené a mano tu DNI y tu clave de MDQ Digital. Si no tenés cuenta, completá el registro inicial.',
                url: 'autenticar.mardelplata.gob.ar/login',
                icon: 'fa-solid fa-user-lock',
                renderGraphic: () => `
          <div class="w-full max-w-sm bg-white rounded-2xl p-5 text-slate-800 shadow-2xl space-y-4 step-animated border border-slate-100">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">MDQ</span>
                <span class="text-xs font-bold text-slate-700">Autenticar Digital</span>
              </div>
              <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <i class="fa-solid fa-lock text-[9px]"></i> Seguro
              </span>
            </div>
            <div class="space-y-2.5">
              <div class="space-y-1">
                <span class="text-[11px] font-semibold text-slate-500">DNI / CUIL</span>
                <div class="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
                  <span>38.452.109</span>
                  <i class="fa-solid fa-id-card text-slate-400"></i>
                </div>
              </div>
              <div class="space-y-1">
                <span class="text-[11px] font-semibold text-slate-500">Contraseña</span>
                <div class="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
                  <span>••••••••••••</span>
                  <i class="fa-solid fa-eye text-slate-400"></i>
                </div>
              </div>
            </div>
            <div class="pt-1">
              <div class="w-full py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2">
                <i class="fa-solid fa-arrow-right-to-bracket text-pink-400"></i> Ingresar al Portal
              </div>
            </div>
          </div>
        `
            },
            {
                step: 2,
                category: 'Trámite Municipal',
                title: 'Seleccionar el trámite "Zoonosis"',
                desc: 'Dentro del panel de trámites y dependencias municipales, buscá y presioná el botón azul con la huella blanca identificado como <strong>Zoonosis</strong>.',
                keyPoint: 'El icono de la huella blanca sobre fondo azul es el acceso oficial para castraciones y sanidad animal.',
                url: 'autenticar.mardelplata.gob.ar/tramites',
                icon: 'fa-solid fa-paw',
                renderGraphic: () => `
          <div class="flex flex-col items-center justify-center step-animated">
            <!-- Exact reproduction of the Zoonosis Card from Municipal Word Document -->
            <div class="relative group cursor-pointer transition-transform transform hover:scale-105">
              <div class="w-56 h-36 bg-[#1A365D] rounded-3xl p-5 flex flex-col items-center justify-center shadow-[0_12px_30px_rgba(225,29,72,0.35)] border-4 border-pink-400/40 relative overflow-hidden pulse-glow">
                <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 shadow-inner">
                  <i class="fa-solid fa-paw text-3xl text-white"></i>
                </div>
                <span class="text-xl font-extrabold text-white tracking-wide">Zoonosis</span>
                <!-- Animated click indicator -->
                <div class="absolute bottom-2 right-2 bg-pink-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow animate-bounce">
                  <i class="fa-solid fa-hand-pointer text-[9px]"></i> Clic aquí
                </div>
              </div>
            </div>
            <span class="text-xs text-slate-300 mt-4 font-medium flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-pink-400"></i> Botón oficial de dependencia Zoonosis MGP
            </span>
          </div>
        `
            },
            {
                step: 3,
                category: 'Punto de Atención',
                title: 'Seleccionar la Sede Canesa esquina Guanahani',
                desc: 'Elegí los turnos correspondientes a la <strong>Sede de Canesa esquina Guanahani</strong> (sede quirúrgica central de Zoonosis Mar del Plata).',
                keyPoint: 'Es la sede fija donde funciona el quirófano central de esterilizaciones.',
                url: 'autenticar.mardelplata.gob.ar/zoonosis/sedes',
                icon: 'fa-solid fa-calendar-check',
                renderGraphic: () => `
          <div class="flex flex-col items-center justify-center step-animated">
            <!-- Exact reproduction of Sede Canesa Card from Municipal Word Document -->
            <div class="w-64 bg-white rounded-3xl p-6 border-4 border-pink-500 shadow-[0_12px_30px_rgba(244,63,94,0.3)] flex flex-col items-center text-center cursor-pointer transition transform hover:scale-105">
              <div class="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 text-2xl mb-3 shadow-inner">
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              <span class="text-base font-black text-[#1A365D] tracking-wider uppercase leading-tight">TURNOS</span>
              <span class="text-xs font-extrabold text-[#1A365D] uppercase mt-1">SEDE ZOONOSIS</span>
              <span class="text-xs font-bold text-pink-600 uppercase mt-0.5 tracking-wide">CANESA Y GUANAHANI</span>
              
              <div class="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 py-1.5 rounded-xl">
                <i class="fa-solid fa-location-dot"></i> Sede Seleccionada
              </div>
            </div>
          </div>
        `
            },
            {
                step: 4,
                category: 'Intervención Quirúrgica',
                title: 'En tipo de trámite, seleccionar "Castraciones"',
                desc: 'Dentro de las opciones de atención de la sede, marcá específicamente <strong>Castraciones</strong> para reservar el cupo de cirugía veterinaria.',
                keyPoint: 'Asegurate de elegir "Castraciones" y no consultas clínicas generales para acceder al quirófano.',
                url: 'autenticar.mardelplata.gob.ar/zoonosis/tipo',
                icon: 'fa-solid fa-stethoscope',
                renderGraphic: () => `
          <div class="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl step-animated border border-slate-100 space-y-3">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block">Seleccione tipo de trámite:</span>
            
            <div class="p-3.5 rounded-xl border-2 border-pink-500 bg-pink-50 text-slate-900 flex items-center justify-between shadow-sm cursor-pointer">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-pink-600 text-white flex items-center justify-center text-sm shadow">
                  <i class="fa-solid fa-scissors"></i>
                </div>
                <div>
                  <div class="text-sm font-extrabold text-slate-900">Castraciones</div>
                  <div class="text-[10px] text-pink-700 font-semibold">Cirugía y Esterilización Canina / Felina</div>
                </div>
              </div>
              <i class="fa-solid fa-circle-check text-pink-600 text-lg"></i>
            </div>

            <div class="p-3 rounded-xl border border-slate-200 text-slate-400 flex items-center justify-between opacity-60">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center text-xs">
                  <i class="fa-solid fa-syringe"></i>
                </div>
                <div class="text-xs font-semibold">Vacunación Antirrábica</div>
              </div>
            </div>
          </div>
        `
            },
            {
                step: 5,
                category: 'Responsable',
                title: 'Indicar si es para el Titular o para un Tercero',
                desc: 'Indicá si el turno es para el mismo titular o para otra persona. En caso de no poder asistir, se deberán completar los datos del <strong>tercero autorizado</strong> (mayor de 18 años).',
                keyPoint: 'Si asiste un tercero, ingresá su nombre completo y DNI. Deberá presentarse con su identificación.',
                url: 'autenticar.mardelplata.gob.ar/zoonosis/responsable',
                icon: 'fa-solid fa-users',
                renderGraphic: () => `
          <div class="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl step-animated border border-slate-100 space-y-3">
            <span class="text-xs font-bold text-slate-600 uppercase tracking-wider block">¿Quién concurre con el animal?</span>
            
            <div class="grid grid-cols-2 gap-2.5">
              <div class="p-3 rounded-xl border border-slate-200 text-center opacity-70">
                <i class="fa-solid fa-user text-slate-400 text-base mb-1 block"></i>
                <span class="text-xs font-bold text-slate-700 block">Mismo Titular</span>
                <span class="text-[9px] text-slate-400">Titular MDQ Digital</span>
              </div>

              <div class="p-3 rounded-xl border-2 border-sky-600 bg-sky-50 text-center shadow-sm">
                <i class="fa-solid fa-user-plus text-sky-600 text-base mb-1 block"></i>
                <span class="text-xs font-bold text-sky-900 block">Tercero Autorizado</span>
                <span class="text-[9px] text-sky-700 font-semibold">Familiar o vecino</span>
              </div>
            </div>

            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700 space-y-2">
              <div class="font-bold text-slate-800 flex items-center gap-1.5 text-xs">
                <i class="fa-solid fa-id-card text-sky-600"></i> Datos del Tercero Autorizado:
              </div>
              <div class="flex justify-between border-b border-slate-200 pb-1">
                <span class="text-slate-500">Nombre:</span>
                <span class="font-bold">Carlos Gómez</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">DNI:</span>
                <span class="font-bold font-mono">31.204.889</span>
              </div>
            </div>
          </div>
        `
            },
            {
                step: 6,
                category: 'Ficha Clínica',
                title: 'Ficha del Animal: Campos Obligatorios y Alternativos',
                desc: 'Seleccionar la <strong>especie, sexo, edad y raza</strong> del animal como campos obligatorios (*). Como campos alternativos y opcionales, indicar el <strong>color y el pelaje</strong>.',
                keyPoint: 'Los 4 obligatorios: Especie, Sexo, Edad y Raza. Ayudan al cálculo de la dosis anestésica.',
                url: 'autenticar.mardelplata.gob.ar/zoonosis/mascota',
                icon: 'fa-solid fa-dog',
                renderGraphic: () => `
          <div class="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl step-animated border border-slate-100 space-y-3">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <span class="text-xs font-black text-slate-800 flex items-center gap-1.5">
                <i class="fa-solid fa-shield-cat text-pink-600"></i> Ficha del Paciente
              </span>
              <span class="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">* 4 Obligatorios</span>
            </div>

            <!-- Obligatorios visual grid -->
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[10px] text-slate-500 block font-semibold">Especie *</span>
                <span class="font-extrabold text-slate-800 flex items-center gap-1 mt-0.5">
                  <i class="fa-solid fa-dog text-pink-500"></i> Canino / Perro
                </span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[10px] text-slate-500 block font-semibold">Sexo *</span>
                <span class="font-extrabold text-slate-800 flex items-center gap-1 mt-0.5">
                  <i class="fa-solid fa-venus text-rose-500"></i> Hembra
                </span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[10px] text-slate-500 block font-semibold">Edad Estimada *</span>
                <span class="font-extrabold text-slate-800 mt-0.5 block">2 años</span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[10px] text-slate-500 block font-semibold">Raza *</span>
                <span class="font-extrabold text-slate-800 mt-0.5 block">Mestizo</span>
              </div>
            </div>

            <!-- Opcionales -->
            <div class="p-2.5 rounded-xl bg-sky-50/50 border border-sky-200/80 text-[11px] text-slate-600 flex justify-between items-center">
              <div>
                <span class="text-[10px] font-bold text-sky-800 uppercase block">Campos Opcionales:</span>
                <span>Color: Marrón / Pelaje: Corto</span>
              </div>
              <i class="fa-solid fa-circle-info text-sky-600 text-sm"></i>
            </div>
          </div>
        `
            },
            {
                step: 7,
                category: 'Consentimiento',
                title: 'Aceptar el Consentimiento Quirúrgico y Cuidados',
                desc: 'Por último, aceptar en el formulario el <strong>consentimiento quirúrgico</strong>, los requisitos obligatorios para la castración (ayuno de 12 hs de sólidos y 6 hs de líquidos) y los cuidados postoperatorios.',
                keyPoint: 'El ayuno previo y la manta limpia son indispensables para resguardar la vida y recuperación del animal.',
                url: 'autenticar.mardelplata.gob.ar/zoonosis/consentimiento',
                icon: 'fa-solid fa-file-signature',
                renderGraphic: () => `
          <div class="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl step-animated border border-slate-100 space-y-3 text-xs">
            <div class="flex items-center gap-2 border-b border-slate-100 pb-2">
              <i class="fa-solid fa-clipboard-check text-emerald-600 text-lg"></i>
              <span class="font-black text-slate-900">Declaración Jurada y Aceptación</span>
            </div>

            <div class="space-y-2">
              <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-[11px] text-emerald-950">
                <i class="fa-solid fa-circle-check text-emerald-600 text-sm mt-0.5"></i>
                <div>
                  <span class="font-bold">Acepto Consentimiento Quirúrgico</span>
                  <p class="text-[10px] text-emerald-800 mt-0.5">Autorizo la intervención y declaro el estado de salud del animal.</p>
                </div>
              </div>

              <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-[11px] text-emerald-950">
                <i class="fa-solid fa-circle-check text-emerald-600 text-sm mt-0.5"></i>
                <div>
                  <span class="font-bold">Cumplimiento de Ayuno Estricto</span>
                  <p class="text-[10px] text-emerald-800 mt-0.5">12 horas de sólidos y 6 horas de líquidos previo al turno.</p>
                </div>
              </div>

              <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-[11px] text-emerald-950">
                <i class="fa-solid fa-circle-check text-emerald-600 text-sm mt-0.5"></i>
                <div>
                  <span class="font-bold">Cuidados Postoperatorios</span>
                  <p class="text-[10px] text-emerald-800 mt-0.5">Llevar manta y cumplir retiro y medicación indicada.</p>
                </div>
              </div>
            </div>
          </div>
        `
            },
            {
                step: 8,
                category: 'Confirmación Final',
                title: 'Consultar turnos, seleccionar fecha y reservar',
                desc: 'Consultar al final del formulario los cupos disponibles en el calendario, seleccionar el día y horario más conveniente y hacer clic en <strong>Reservar</strong> para obtener el comprobante digital.',
                keyPoint: 'El sistema emite el número de turno con fecha, hora y sede asignada. Podés guardarlo en tu teléfono.',
                url: 'autenticar.mardelplata.gob.ar/zoonosis/confirmacion',
                icon: 'fa-solid fa-circle-check',
                renderGraphic: () => `
          <div class="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl step-animated border border-slate-100 space-y-3.5">
            <span class="text-xs font-black text-slate-800 block uppercase tracking-wider">Cupos Libres - Canesa y Guanahani</span>

            <!-- Slot picker -->
            <div class="grid grid-cols-2 gap-2">
              <div class="p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-center shadow-sm">
                <span class="text-[10px] font-bold text-emerald-800 uppercase block">Próximo Lunes</span>
                <span class="text-base font-extrabold text-emerald-700 block my-0.5">08:30 hs</span>
                <span class="text-[9px] font-bold bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded">Seleccionado</span>
              </div>

              <div class="p-3 rounded-xl border border-slate-200 text-center opacity-60">
                <span class="text-[10px] font-semibold text-slate-500 uppercase block">Miércoles</span>
                <span class="text-base font-bold text-slate-700 block my-0.5">09:15 hs</span>
                <span class="text-[9px] text-slate-400">Cupo libre</span>
              </div>
            </div>

            <!-- Reserve Button Simulation -->
            <div class="pt-1">
              <div class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs text-center shadow-lg flex items-center justify-center gap-2 cursor-pointer transition transform hover:scale-[1.02]">
                <i class="fa-solid fa-calendar-check text-sm"></i>
                <span>RESERVAR TURNO DEFINITIVO</span>
              </div>
            </div>
            
            <p class="text-[10px] text-slate-400 text-center">Recibirás confirmación digital de Zoonosis MGP</p>
          </div>
        `
            }
        ];

        // Build the stepper pill navigation
        function renderStepNavPills() {
            const container = document.getElementById('step-nav-pills');
            if (!container) return;
            container.innerHTML = '';

            GUIDE_STEPS.forEach((item) => {
                const isActive = item.step === activeGuideStep;
                const btn = document.createElement('button');
                btn.onclick = () => setGuideStep(item.step);
                btn.className = `flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${isActive
                    ? 'bg-brand-navy text-white shadow-md ring-2 ring-pink-500 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`;

                btn.innerHTML = `
          <span class="w-5 h-5 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'bg-slate-300 text-slate-700'} flex items-center justify-center text-[10px] font-black">
            ${item.step}
          </span>
          <i class="${item.icon} text-xs ${isActive ? 'text-pink-300' : 'text-slate-400'}"></i>
          <span class="hidden sm:inline whitespace-nowrap">${item.category}</span>
        `;
                container.appendChild(btn);
            });
        }

        // Update the interactive guide card view
        function updateInteractiveGuideCard() {
            const data = GUIDE_STEPS.find(s => s.step === activeGuideStep) || GUIDE_STEPS[0];

            // Update text fields
            document.getElementById('guide-badge-number').textContent = data.step;
            document.getElementById('guide-category-tag').textContent = data.category;
            document.getElementById('guide-step-title').textContent = data.title;
            document.getElementById('guide-step-desc').innerHTML = data.desc;
            document.getElementById('guide-key-point-text').textContent = data.keyPoint;
            document.getElementById('graphic-header-url').textContent = data.url;
            document.getElementById('graphic-step-badge').textContent = `Paso ${data.step} de 8`;
            document.getElementById('guide-page-indicator').textContent = `${data.step} / 8`;

            // Update graphic sandbox
            const screenContainer = document.getElementById('graphic-screen-content');
            if (screenContainer) {
                screenContainer.innerHTML = data.renderGraphic();
            }

            // Update button states
            const prevBtn = document.getElementById('btn-guide-prev');
            const nextBtn = document.getElementById('btn-guide-next');
            if (prevBtn) prevBtn.disabled = (data.step === 1);
            if (nextBtn) {
                if (data.step === 8) {
                    nextBtn.innerHTML = `<span>Probar en Simulador</span> <i class="fa-solid fa-play text-xs"></i>`;
                } else {
                    nextBtn.innerHTML = `<span>Siguiente</span> <i class="fa-solid fa-arrow-right text-xs"></i>`;
                }
            }

            // Re-render navigation pills to update active state
            renderStepNavPills();
        }

        function setGuideStep(stepNumber) {
            if (stepNumber < 1 || stepNumber > 8) return;
            activeGuideStep = stepNumber;
            updateInteractiveGuideCard();
        }

        function nextGuideStep() {
            if (activeGuideStep < 8) {
                setGuideStep(activeGuideStep + 1);
            } else {
                // If at step 8, offer to go to simulator
                switchTab('simulador');
            }
        }

        function prevGuideStep() {
            if (activeGuideStep > 1) {
                setGuideStep(activeGuideStep - 1);
            }
        }

        function setGuideViewMode(mode) {
            guideViewMode = mode;
            const interactiveContainer = document.getElementById('guide-interactive-container');
            const gridContainer = document.getElementById('guide-grid-container');
            const btnInteractivo = document.getElementById('btn-mode-interactivo');
            const btnGrilla = document.getElementById('btn-mode-grilla');

            if (mode === 'interactivo') {
                interactiveContainer.classList.remove('hidden');
                gridContainer.classList.add('hidden');
                btnInteractivo.className = "px-3 py-1.5 rounded-lg bg-white text-slate-900 shadow-sm transition flex items-center gap-1.5";
                btnGrilla.className = "px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5";
            } else {
                interactiveContainer.classList.add('hidden');
                gridContainer.classList.remove('hidden');
                btnGrilla.className = "px-3 py-1.5 rounded-lg bg-white text-slate-900 shadow-sm transition flex items-center gap-1.5";
                btnInteractivo.className = "px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5";
            }
        }

        function selectStepAndSwitch(stepNumber) {
            setGuideStep(stepNumber);
            setGuideViewMode('interactivo');
            const interactiveContainer = document.getElementById('guide-interactive-container');
            if (interactiveContainer) {
                interactiveContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // QR destinations from user request
        const QR_URLS = {
            portal: 'https://autenticar.mardelplata.gob.ar/',
            registro: 'https://autenticar.mardelplata.gob.ar/',
            turno: 'https://autenticar.mardelplata.gob.ar/',
            canesa: 'https://maps.google.com/?q=Canesa+y+Guanahani+Mar+del+Plata',
            libertad: 'https://maps.app.goo.gl/e1FLqfcTdYfVujRZA',
            colinas: 'https://maps.app.goo.gl/p8RSDkeRbakHVdvX9'
        };

        // Scripts for flip cards and navigation

        // Flip to QR face and configure for selected option
        function flipToQr(type) {
            currentFlipMode = type;
            const viewRegistro = document.getElementById('flip-view-registro');
            const viewTurno = document.getElementById('flip-view-turno');
            const viewCronograma = document.getElementById('flip-view-cronograma');
            const viewGuia = document.getElementById('view-guia');

            // Ocultar todas las vistas traseras
            viewRegistro.classList.add('hidden');
            viewTurno.classList.add('hidden');
            if (viewCronograma) viewCronograma.classList.add('hidden');
            if (viewGuia) viewGuia.classList.add('hidden');

            if (type === 'registro') {
                viewRegistro.classList.remove('hidden');
            } else if (type === 'cronograma') {
                if (viewCronograma) {
                    viewCronograma.classList.remove('hidden');
                    sincronizarEstadoCronogramaFlip();
                    cargarCronogramaEnVista();
                }
            } else {
                viewTurno.classList.remove('hidden');
            }

            const card = document.getElementById('interactive-flip-card');
            card.classList.add('is-flipped');
        }

        // Flip back to options menu
        function flipBack() {
            const card = document.getElementById('interactive-flip-card');
            card.classList.remove('is-flipped');
            // Ocultar los pasos al volver al menú principal
            const viewGuia = document.getElementById('view-guia');
            if (viewGuia) viewGuia.classList.add('hidden');
        }

        // Update only the QR code displayed on the flipped side
        function updateFlippedContent(type) {
            currentFlipMode = type;
            if (type === 'libertad') {
                generateFlipQr(QR_URLS.libertad, "#0284C7");
            } else if (type === 'colinas') {
                generateFlipQr(QR_URLS.colinas, "#0D9488");
            } else {
                // 'turno' o portal directo
                generateFlipQr(QR_URLS.turno, "#1A365D");
            }
        }

        function switchTab(tab) {
            currentTab = tab;
            const tabs = ['guia', 'simulador', 'puntos'];

            tabs.forEach(t => {
                const view = document.getElementById(`view-${t}`);
                const btn = document.getElementById(`tab-btn-${t}`);
                if (t === tab) {
                    view.classList.remove('hidden');
                    btn.className = "px-3.5 py-1.5 rounded-lg font-medium transition-all bg-sky-600 text-white shadow-sm flex items-center gap-1.5";
                } else {
                    view.classList.add('hidden');
                    btn.className = "px-3.5 py-1.5 rounded-lg font-medium transition-all bg-white/10 text-slate-200 hover:bg-white/20 flex items-center gap-1.5";
                }
            });
        }

        function goToSimStep(stepNumber) {
            currentSimStep = stepNumber;
            const totalSteps = 5;

            // Hide all simulation step views
            for (let i = 1; i <= 5; i++) {
                const stepEl = document.getElementById(`sim-step-${i}`);
                if (stepEl) stepEl.classList.add('hidden');
            }
            document.getElementById('sim-step-complete').classList.add('hidden');

            const target = document.getElementById(`sim-step-${stepNumber}`);
            if (target) {
                target.classList.remove('hidden');
            }

            // Update progress bar
            const progressPercent = Math.min(100, Math.round((stepNumber / totalSteps) * 100));
            document.getElementById('wizard-progress-bar').style.width = `${progressPercent}%`;
            document.getElementById('wizard-step-label').textContent = `Paso ${stepNumber} de ${totalSteps}`;
        }

        function selectTrámiteZoonosis() {
            showToast("Área Zoonosis seleccionada.");
        }

        function toggleTercero(isTercero) {
            const fields = document.getElementById('tercero-fields');
            if (isTercero) {
                fields.classList.remove('hidden');
            } else {
                fields.classList.add('hidden');
            }
        }

        function confirmarReservaSimulada() {
            const consent1 = document.getElementById('check-consentimiento').checked;
            const consent2 = document.getElementById('check-postoperatorio').checked;

            if (!consent1 || !consent2) {
                showToast("⚠️ Debe tildar los consentimientos quirúrgicos y postoperatorios obligatorios para reservar.");
                return;
            }

            // Populate voucher details
            const titular = document.getElementById('sim-nombre').value || 'Titular Registrado';
            const especie = document.getElementById('sim-especie').value;
            const raza = document.getElementById('sim-raza').value || 'Mestizo';
            const sedeRadio = document.querySelector('input[name="sim-sede"]:checked');
            const sede = sedeRadio ? sedeRadio.value : 'Canesa y Guanahani';
            const slotRadio = document.querySelector('input[name="sim-slot"]:checked');
            const horario = slotRadio ? slotRadio.value : 'Lunes 08:30 hs';

            document.getElementById('ticket-titular').textContent = titular;
            document.getElementById('ticket-animal').textContent = `${especie} • ${raza}`;
            document.getElementById('ticket-sede').textContent = sede;
            document.getElementById('ticket-horario').textContent = horario;
            document.getElementById('ticket-codigo').textContent = `ZN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

            // Hide step 5 and show voucher
            document.getElementById('sim-step-5').classList.add('hidden');
            document.getElementById('sim-step-complete').classList.remove('hidden');

            document.getElementById('wizard-progress-bar').style.width = '100%';
            document.getElementById('wizard-step-label').textContent = 'Completado';

            showToast("¡Turno reservado exitosamente! Mostrá este comprobante el día de la cita.");
        }

        function openQrModal(title, url, subtitle) {
            const modal = document.getElementById('qr-modal');
            const canvasContainer = document.getElementById('modal-qr-canvas');

            document.getElementById('modal-qr-title').textContent = title;
            document.getElementById('modal-qr-subtitle').textContent = subtitle || url;
            document.getElementById('modal-qr-link').href = url;

            // Clear previous
            canvasContainer.innerHTML = '';

            // Create new QR
            modalQrInstance = new QRCode(canvasContainer, {
                text: url,
                width: 190,
                height: 190,
                colorDark: "#1A365D",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeQrModal() {
            const modal = document.getElementById('qr-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        const VIDEO_TUTORIAL_URL = "https://www.youtube-nocookie.com/embed/videoseries?list=PLPSK3rQBNRuJBZbKjrD0DYkmjfHsDH6aH&si=5FvyPLDn6cHM34Z6&autoplay=1";

        function openVideoModal() {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('video-tutorial-iframe');
            if (iframe) iframe.src = VIDEO_TUTORIAL_URL;
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        }

        function closeVideoModal() {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('video-tutorial-iframe');
            if (iframe) iframe.src = "";
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }

        // Close modal on ESC key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeQrModal();
                closeVideoModal();
            }
        });

        function showToast(message) {
            const banner = document.getElementById('toast-banner');
            const text = document.getElementById('toast-message');
            text.textContent = message;
            banner.classList.remove('hidden');

            clearTimeout(window.toastTimer);
            window.toastTimer = setTimeout(() => {
                hideToast();
            }, 5000);
        }

        function hideToast() {
            const banner = document.getElementById('toast-banner');
            banner.classList.add('hidden');
        }

        // ─── Cronograma Quirófano Móvil · Quitofabnor ─────────────────────────
        const _0x1a2b = [
            "https://script.google.com",
            "/macros/s/",
            "AKfycbx66fXBjPPpxKC0HReOOzjLzO_PtG6qf7VCv65Ar9N4awzl38mFzBTWC7ufCk1nBMgFaA",
            "/exec"
        ];
        const ZOOBASE_API_URL = _0x1a2b.join('');

        let _cronogramaOnline = null;
        let _cronogramaData = null;   // JSON completo cacheado

        // ── Verificación del estado + carga de datos ──────────────────────────
        async function verificarEstadoCronograma() {
            const dot = document.getElementById('cronograma-status-dot');
            if (dot) {
                dot.className = 'absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[#1B2559] bg-slate-400 animate-pulse transition-colors duration-500';
                dot.title = 'Verificando estado…';
            }

            try {
                const resp = await fetch(ZOOBASE_API_URL, { method: 'GET', mode: 'cors' });
                if (!resp.ok) throw new Error('HTTP ' + resp.status);
                const data = await resp.json().catch(() => null);
                _cronogramaOnline = data && data.status === 'success';
                _cronogramaData = data;
            } catch (e) {
                _cronogramaOnline = false;
                _cronogramaData = null;
            }

            if (dot) {
                dot.className = `absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[#1B2559] ${_cronogramaOnline ? 'bg-emerald-400' : 'bg-red-500'} transition-colors duration-500`;
                dot.title = _cronogramaOnline ? 'Sistema en línea' : 'Sin conexión';
            }
            sincronizarEstadoCronogramaFlip();
        }

        // ── Indicador compacto en la cara trasera ─────────────────────────────
        function sincronizarEstadoCronogramaFlip() {
            const flipDot = document.getElementById('cronograma-flip-dot');
            const flipStatus = document.getElementById('cronograma-flip-status');
            if (!flipDot || !flipStatus) return;
            if (_cronogramaOnline === null) {
                flipDot.className = 'w-3 h-3 rounded-full bg-slate-400 animate-pulse shrink-0';
                flipStatus.textContent = 'Verificando…';
            } else if (_cronogramaOnline) {
                flipDot.className = 'w-3 h-3 rounded-full bg-emerald-400 shrink-0';
                flipStatus.textContent = 'En línea';
            } else {
                flipDot.className = 'w-3 h-3 rounded-full bg-red-500 shrink-0';
                flipStatus.textContent = 'Sin conexión';
            }
        }

        // ── Cargar y renderizar el cronograma al girar ────────────────────────
        async function cargarCronogramaEnVista() {
            const loader = document.getElementById('cronograma-loading');
            const contenido = document.getElementById('cronograma-contenido');
            const actEl = document.getElementById('cronograma-actualizado');
            const fechaEl = document.getElementById('cronograma-fecha-act');
            if (!contenido) return;

            // Mostrar spinner
            if (loader) loader.classList.remove('hidden');
            contenido.classList.add('hidden');
            contenido.innerHTML = '';
            if (actEl) actEl.classList.add('hidden');

            // Fetch si no hay datos cacheados aún
            if (!_cronogramaData) {
                try {
                    const resp = await fetch(ZOOBASE_API_URL, { method: 'GET', mode: 'cors' });
                    const data = await resp.json().catch(() => null);
                    _cronogramaOnline = data && data.status === 'success';
                    _cronogramaData = data;
                    sincronizarEstadoCronogramaFlip();
                } catch (e) {
                    _cronogramaOnline = false;
                }
            }

            if (loader) loader.classList.add('hidden');

            // Sin datos / error
            if (!_cronogramaData || !_cronogramaOnline) {
                contenido.innerHTML = `
                    <div class="w-full bg-red-500/10 border border-red-400/30 rounded-xl p-4 text-center">
                        <i class="fa-solid fa-triangle-exclamation text-red-400 text-xl mb-2 block"></i>
                        <p class="text-sm text-red-200 font-bold">No se pudo obtener el cronograma</p>
                        <p class="text-[11px] text-slate-400 mt-1">Verificá tu conexión o intentá más tarde.</p>
                        <a href="https://www.mardelplata.gob.ar/quirofanobarriosweb" target="_blank"
                            class="inline-flex items-center gap-1.5 mt-3 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold transition">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver en sitio oficial
                        </a>
                    </div>`;
                contenido.classList.remove('hidden');
                return;
            }

            const crono = _cronogramaData.cronograma;

            // ── Caso: bloques estructurados ───────────────────────────────────
            if (crono && crono.bloques && crono.bloques.length > 0) {
                crono.bloques.forEach(bloque => {
                    const periodoEl = document.createElement('div');
                    periodoEl.className = 'bg-violet-500/20 border border-violet-400/30 rounded-xl px-3 py-2 mb-1';
                    periodoEl.innerHTML = `
                        <p class="text-[11px] font-black text-violet-200 uppercase tracking-wide">
                            <i class="fa-regular fa-calendar mr-1"></i>${bloque.periodo}
                        </p>`;
                    contenido.appendChild(periodoEl);

                    bloque.sedes.forEach(sede => {
                        const sedeEl = document.createElement('a');
                        sedeEl.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(sede.nombre + ', Mar del Plata')}&travelmode=transit`;
                        sedeEl.target = "_blank";
                        sedeEl.className = 'block bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 mb-1 hover:bg-white/10 transition group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-violet-400';
                        sedeEl.innerHTML = `
                            <div class="flex items-start gap-2.5">
                                <i class="fa-solid fa-location-dot text-violet-400 text-sm mt-0.5 shrink-0"></i>
                                <div class="flex-1">
                                    <p class="text-xs font-bold text-white leading-tight">${sede.nombre}</p>
                                    ${sede.detalle ? `<p class="text-[11px] text-slate-400 mt-0.5">${sede.detalle}</p>` : ''}
                                </div>
                            </div>
                            <div class="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-violet-300 group-hover:text-violet-200 transition-colors">
                                <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <i class="fa-solid fa-bus text-yellow-400 text-xs"></i> Cómo llegar en colectivo
                                </span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </div>`;
                        contenido.appendChild(sedeEl);
                    });
                });

                // ── Caso: texto plano ─────────────────────────────────────────────
            } else if (crono && crono.textoPlano) {
                const lineas = crono.textoPlano
                    .split(/[\n\r]+|(?=-[A-Z])/)
                    .map(l => l.replace(/^-/, '').trim())
                    .filter(l => l.length > 4);

                lineas.forEach(linea => {
                    const esTitulo = /^CRONOGRAMA/i.test(linea);
                    if (esTitulo) {
                        const el = document.createElement('div');
                        el.className = 'bg-violet-500/20 border border-violet-400/30 rounded-xl px-3 py-2 mb-1 mt-2 first:mt-0';
                        el.innerHTML = `<p class="text-[11px] font-black text-violet-200 uppercase">${linea}</p>`;
                        contenido.appendChild(el);
                    } else {
                        const el = document.createElement('a');
                        el.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(linea + ', Mar del Plata')}&travelmode=transit`;
                        el.target = "_blank";
                        el.className = 'block bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 mb-1 hover:bg-white/10 transition group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-violet-400';
                        el.innerHTML = `
                            <div class="flex items-start gap-2.5">
                                <i class="fa-solid fa-location-dot text-violet-400 text-sm mt-0.5 shrink-0"></i>
                                <div class="flex-1">
                                    <p class="text-[11px] font-bold text-slate-200">${linea}</p>
                                </div>
                            </div>
                            <div class="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-violet-300 group-hover:text-violet-200 transition-colors">
                                <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <i class="fa-solid fa-bus text-yellow-400 text-xs"></i> Cómo llegar en colectivo
                                </span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </div>`;
                        contenido.appendChild(el);
                    }
                });
            }

            contenido.classList.remove('hidden');

            // Fecha de actualización
            if (actEl && fechaEl && _cronogramaData.actualizadoEn) {
                fechaEl.textContent = 'Actualizado: ' + _cronogramaData.actualizadoEn;
                actEl.classList.remove('hidden');
            }
        }

        // Verificar al cargar y cada 2 minutos
        document.addEventListener('DOMContentLoaded', () => {
            verificarEstadoCronograma();
            setInterval(verificarEstadoCronograma, 120000);
        });
