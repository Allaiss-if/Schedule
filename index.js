 // Data Awal Berdasarkan Gambar Jadwal
        const initialScheduleData = [
            // KELAS 1A
            { id: '1a1', class: '1A', day: 'Senin', time: '07.00 - 08.40', subject: 'Literasi Digital dan Teknologi Informasi', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'B18' },
            { id: '1a2', class: '1A', day: 'Senin', time: '08.40 - 10.20', subject: 'Pendidikan Pancasila', lecturer: 'Yuyun Sri Wahyuni, M.Hum.', room: 'A12' },
            { id: '1a3', class: '1A', day: 'Senin', time: '13.00 - 15.30', subject: 'Arsitektur dan Organisasi Komputer', lecturer: 'Sigit Senjaya, S.T., M.Kom.', room: 'E16-LAB. HARDWARE' },
            { id: '1a4', class: '1A', day: 'Selasa', time: '08.40 - 10.20', subject: 'Bahasa Asing', lecturer: 'Yusup Supyani, M.Hum.', room: 'B15' },
            { id: '1a5', class: '1A', day: 'Selasa', time: '13.00 - 14.40', subject: 'Kemanusiaan dan Keimanan', lecturer: 'Wahyu Jati Purwito, M.Pd.', room: 'B15' },
            { id: '1a6', class: '1A', day: 'Selasa', time: '15.30 - 18.00', subject: 'Logika Informatika', lecturer: 'Sigit Senjaya, S.T., M.Kom.', room: 'E17-LAB. DASAR' },
            { id: '1a7', class: '1A', day: 'Kamis', time: '13.00 - 15.30', subject: 'Dasar Pemrograman', lecturer: 'Agung Pambudi, S.Kom., M.Cs.', room: 'E17-LAB. DASAR' },
            { id: '1a8', class: '1A', day: 'Jumat', time: '15.30 - 18.00', subject: 'Kalkulus', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'A12' },

            // KELAS 1B
            { id: '1b1', class: '1B', day: 'Senin', time: '10.20 - 12.00', subject: 'Pendidikan Pancasila', lecturer: 'Yuyun Sri Wahyuni, M.Hum.', room: 'A12' },
            { id: '1b2', class: '1B', day: 'Senin', time: '13.00 - 15.30', subject: 'Kalkulus', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'B11' },
            { id: '1b3', class: '1B', day: 'Selasa', time: '08.40 - 10.20', subject: 'Kemanusiaan dan Keimanan', lecturer: 'Wahyu Jati Purwito, M.Pd.', room: 'C16' },
            { id: '1b4', class: '1B', day: 'Selasa', time: '13.00 - 14.40', subject: 'Bahasa Asing', lecturer: 'Yusup Supyani, M.Hum.', room: 'B5A' },
            { id: '1b5', class: '1B', day: 'Selasa', time: '15.30 - 18.00', subject: 'Arsitektur dan Organisasi Komputer', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'D13-LAB. STATISTIK' },
            { id: '1b6', class: '1B', day: 'Kamis', time: '07.00 - 09.30', subject: 'Dasar Pemrograman', lecturer: 'Didik Indrayana, S.T., M.Kom.', room: 'E17-LAB. DASAR' },
            { id: '1b7', class: '1B', day: 'Kamis', time: '14.40 - 16.20', subject: 'Literasi Digital dan Teknologi Informasi', lecturer: 'Aris Juliansyah, S.T., M.I.Kom.', room: 'B11' },
            { id: '1b8', class: '1B', day: 'Jumat', time: '13.00 - 15.30', subject: 'Logika Informatika', lecturer: 'Sigit Senjaya, S.T., M.Kom.', room: 'B13' },

            // KELAS 1C
            { id: '1c1', class: '1C', day: 'Senin', time: '09.30 - 12.00', subject: 'Arsitektur dan Organisasi Komputer', lecturer: 'Sigit Senjaya, S.T., M.Kom.', room: 'E16-LAB. HARDWARE' },
            { id: '1c2', class: '1C', day: 'Senin', time: '15.30 - 17.10', subject: 'Literasi Digital dan Teknologi Informasi', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'B11' },
            { id: '1c3', class: '1C', day: 'Selasa', time: '07.00 - 08.40', subject: 'Kemanusiaan dan Keimanan', lecturer: 'Wahyu Jati Purwito, M.Pd.', room: 'B15' },
            { id: '1c4', class: '1C', day: 'Selasa', time: '09.30 - 11.10', subject: 'Pendidikan Pancasila', lecturer: 'Yuyun Sri Wahyuni, M.Hum.', room: '(TBD)' },
            { id: '1c5', class: '1C', day: 'Selasa', time: '14.40 - 16.20', subject: 'Bahasa Asing', lecturer: 'Yusup Supyani, M.Hum.', room: 'B15' },
            { id: '1c6', class: '1C', day: 'Kamis', time: '09.30 - 12.00', subject: 'Dasar Pemrograman', lecturer: 'Didik Indrayana, S.T., M.Kom.', room: 'E17-LAB. DASAR' },
            { id: '1c7', class: '1C', day: 'Jumat', time: '13.00 - 15.30', subject: 'Kalkulus', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'B15' },
            { id: '1c8', class: '1C', day: 'Jumat', time: '15.30 - 18.00', subject: 'Logika Informatika', lecturer: 'Sigit Senjaya, S.T., M.Kom.', room: 'A6' },

            // KELAS 3A
            { id: '3a1', class: '3A', day: 'Senin', time: '07.00 - 08.40', subject: 'Kewirausahaan', lecturer: 'Aris Juliansyah, S.T., M.I.Kom.', room: 'A12' },
            { id: '3a2', class: '3A', day: 'Selasa', time: '07.00 - 09.30', subject: 'Statistika Informatika', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'D13-LAB. STATISTIK' },
            { id: '3a3', class: '3A', day: 'Rabu', time: '07.50 - 10.20', subject: 'Struktur Data', lecturer: 'Agung Pambudi, S.Kom., M.Cs.', room: 'E17-LAB. DASAR' },
            { id: '3a4', class: '3A', day: 'Rabu', time: '13.00 - 15.30', subject: 'Pemrograman Berorientasi Objek', lecturer: 'Prajoko, S.Pd.I., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '3a5', class: '3A', day: 'Rabu', time: '15.30 - 18.00', subject: 'Interaksi Manusia dan Komputer', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'D12-LAB. DESAIN' },
            { id: '3a6', class: '3A', day: 'Kamis', time: '09.30 - 11.10', subject: 'Kemuhammadiyahan', lecturer: 'Wahyu Jati Purwito, M.Pd.', room: 'B11' },
            { id: '3a7', class: '3A', day: 'Jumat', time: '07.00 - 09.30', subject: 'Basis Data', lecturer: 'Asep Budiman Kusdinar, M.T.', room: 'E17-LAB. DASAR' },
            { id: '3a8', class: '3A', day: 'Jumat', time: '15.30 - 18.00', subject: 'Rekayasa Perangkat Lunak', lecturer: 'Asril Adi Sunarto, M.Kom.', room: 'E15-LAB. LANJUT' },

            // KELAS 3B
            { id: '3b1', class: '3B', day: 'Senin', time: '08.40 - 10.20', subject: 'Kewirausahaan', lecturer: 'Aris Juliansyah, S.T., M.I.Kom.', room: 'B15' },
            { id: '3b2', class: '3B', day: 'Senin', time: '13.00 - 15.30', subject: 'Rekayasa Perangkat Lunak', lecturer: 'Asriyanik, M.T.', room: 'E17-LAB. DASAR' },
            { id: '3b3', class: '3B', day: 'Selasa', time: '09.30 - 12.00', subject: 'Statistika Informatika', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'D13-LAB. STATISTIK' },
            { id: '3b4', class: '3B', day: 'Rabu', time: '07.50 - 10.20', subject: 'Interaksi Manusia dan Komputer', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'D12-LAB. DESAIN' },
            { id: '3b5', class: '3B', day: 'Rabu', time: '13.00 - 15.30', subject: 'Struktur Data', lecturer: 'Asep Budiman Kusdinar, M.T.', room: 'E17-LAB. DASAR' },
            { id: '3b6', class: '3B', day: 'Rabu', time: '15.30 - 18.00', subject: 'Pemrograman Berorientasi Objek', lecturer: 'Prajoko, S.Pd.I., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '3b7', class: '3B', day: 'Kamis', time: '16.20 - 18.00', subject: 'Kemuhammadiyahan', lecturer: 'Wahyu Jati Purwito, M.Pd.', room: 'B11' },
            { id: '3b8', class: '3B', day: 'Jumat', time: '09.30 - 12.00', subject: 'Basis Data', lecturer: 'Agung Pambudi, S.Kom., M.Cs.', room: 'E17-LAB. DASAR' },

            // KELAS 3C
            { id: '3c1', class: '3C', day: 'Senin', time: '07.00 - 09.30', subject: 'Rekayasa Perangkat Lunak', lecturer: 'Sigit Senjaya, S.T., M.Kom.', room: 'E16-LAB. HARDWARE' },
            { id: '3c2', class: '3C', day: 'Senin', time: '10.20 - 12.00', subject: 'Kewirausahaan', lecturer: 'Aris Juliansyah, S.T., M.I.Kom.', room: 'B14' },
            { id: '3c3', class: '3C', day: 'Senin', time: '16.20 - 18.00', subject: 'Kemuhammadiyahan', lecturer: 'Wahyu Jati Purwito, M.Pd.', room: 'B14' },
            { id: '3c4', class: '3C', day: 'Selasa', time: '13.00 - 15.30', subject: 'Statistika Informatika', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'D13-LAB. STATISTIK' },
            { id: '3c5', class: '3C', day: 'Rabu', time: '07.50 - 10.20', subject: 'Pemrograman Berorientasi Objek', lecturer: 'Prajoko, S.Pd.I., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '3c6', class: '3C', day: 'Rabu', time: '13.00 - 15.30', subject: 'Interaksi Manusia dan Komputer', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'D12-LAB. DESAIN' },
            { id: '3c7', class: '3C', day: 'Rabu', time: '15.30 - 18.00', subject: 'Struktur Data', lecturer: 'Asep Budiman Kusdinar, M.T.', room: 'E17-LAB. DASAR' },
            { id: '3c8', class: '3C', day: 'Jumat', time: '13.00 - 15.30', subject: 'Basis Data', lecturer: 'Agung Pambudi, S.Kom., M.Cs.', room: 'E17-LAB. DASAR' },

            // KELAS 5A
            { id: '5a1', class: '5A', day: 'Selasa', time: '07.00 - 09.30', subject: 'Jaringan Komputer Lanjut', lecturer: 'Didik Indrayana, S.T., M.Kom.', room: 'E17-LAB. DASAR' },
            { id: '5a2', class: '5A', day: 'Selasa', time: '09.30 - 12.00', subject: 'Pemrograman Mobile Multiplatform', lecturer: 'Prajoko, S.Pd.I., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '5a3', class: '5A', day: 'Rabu', time: '07.50 - 10.20', subject: 'Mikrokontroler', lecturer: 'Fathia Frazna Azzahra, S.ST., M.T.', room: 'E16-LAB. HARDWARE' },
            { id: '5a4', class: '5A', day: 'Kamis', time: '07.00 - 09.30', subject: 'Keamanan Data dan Informasi', lecturer: 'Asril Adi Sunarto, M.Kom.', room: 'E16-LAB. HARDWARE' },
            { id: '5a5', class: '5A', day: 'Kamis', time: '09.30 - 12.00', subject: 'Pemrograman Web Berbasis Framework', lecturer: 'Asep Budiman Kusdinar, M.T.', room: 'E15-LAB. LANJUT' },
            { id: '5a6', class: '5A', day: 'Kamis', time: '13.00 - 15.30', subject: 'Kecerdasan Buatan', lecturer: 'Asriyanik, M.T.', room: 'D15-LAB. UMUM' },
            { id: '5a7', class: '5A', day: 'Jumat', time: '13.00 - 15.30', subject: 'Pengolahan Citra Digital', lecturer: 'Fathia Frazna Azzahra, S.ST., M.T.', room: 'E16-LAB. HARDWARE' },

            // KELAS 5B
            { id: '5b1', class: '5B', day: 'Selasa', time: '09.30 - 12.00', subject: 'Jaringan Komputer Lanjut', lecturer: 'Didik Indrayana, S.T., M.Kom.', room: 'E17-LAB. DASAR' },
            { id: '5b2', class: '5B', day: 'Selasa', time: '13.00 - 15.30', subject: 'Pemrograman Mobile Multiplatform', lecturer: 'Prajoko, S.Pd.I., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '5b3', class: '5B', day: 'Rabu', time: '13.00 - 15.30', subject: 'Mikrokontroler', lecturer: 'Fathia Frazna Azzahra, S.ST., M.T.', room: 'E16-LAB. HARDWARE' },
            { id: '5b4', class: '5B', day: 'Kamis', time: '07.00 - 09.30', subject: 'Kecerdasan Buatan', lecturer: 'Asriyanik, M.T.', room: 'D15-LAB. UMUM' },
            { id: '5b5', class: '5B', day: 'Kamis', time: '09.30 - 12.00', subject: 'Keamanan Data dan Informasi', lecturer: 'Asril Adi Sunarto, M.Kom.', room: 'E16-LAB. HARDWARE' },
            { id: '5b6', class: '5B', day: 'Kamis', time: '13.00 - 15.30', subject: 'Pemrograman Web Berbasis Framework', lecturer: 'Asep Budiman Kusdinar, M.T.', room: 'E15-LAB. LANJUT' },
            { id: '5b7', class: '5B', day: 'Jumat', time: '07.00 - 09.30', subject: 'Pengolahan Citra Digital', lecturer: 'Asriyanik, M.T.', room: 'E16-LAB. HARDWARE' },

            // KELAS 5C
            { id: '5c1', class: '5C', day: 'Selasa', time: '07.00 - 09.30', subject: 'Pemrograman Mobile Multiplatform', lecturer: 'Prajoko, S.Pd.I., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '5c2', class: '5C', day: 'Selasa', time: '13.00 - 15.30', subject: 'Jaringan Komputer Lanjut', lecturer: 'Didik Indrayana, S.T., M.Kom.', room: 'E17-LAB. DASAR' },
            { id: '5c3', class: '5C', day: 'Kamis', time: '07.00 - 09.30', subject: 'Pemrograman Web Berbasis Framework', lecturer: 'Asep Budiman Kusdinar, M.T.', room: 'E15-LAB. LANJUT' },
            { id: '5c4', class: '5C', day: 'Kamis', time: '09.30 - 12.00', subject: 'Kecerdasan Buatan', lecturer: 'Asriyanik, M.T.', room: 'D15-LAB. UMUM' },
            { id: '5c5', class: '5C', day: 'Kamis', time: '13.00 - 15.30', subject: 'Keamanan Data dan Informasi', lecturer: 'Asril Adi Sunarto, M.Kom.', room: 'E16-LAB. HARDWARE' },
            { id: '5c6', class: '5C', day: 'Jumat', time: '09.30 - 12.00', subject: 'Pengolahan Citra Digital', lecturer: 'Winda Apriandari, S.T., M.Kom.', room: 'E16-LAB. HARDWARE' },
            { id: '5c7', class: '5C', day: 'Jumat', time: '15.30 - 18.00', subject: 'Mikrokontroler', lecturer: 'Fathia Frazna Azzahra, S.ST., M.T.', room: 'E16-LAB. HARDWARE' },

            // KELAS 7A
            { id: '7a1', class: '7A', day: 'Senin', time: '07.00 - 09.30', subject: 'Software Engineering for Specific Domain', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '7a2', class: '7A', day: 'Senin', time: '09.30 - 12.00', subject: 'Computer Vision', lecturer: 'Asriyanik, M.T.', room: 'E17-LAB. DASAR' },
            { id: '7a3', class: '7A', day: 'Selasa', time: '07.00 - 09.30', subject: 'Digital Forensic', lecturer: 'Agung Pambudi, S.Kom., M.Cs.', room: 'E16-LAB. HARDWARE' },
            { id: '7a4', class: '7A', day: 'Selasa', time: '13.00 - 15.30', subject: 'Digital Forensic', lecturer: 'Agung Pambudi, S.Kom., M.Cs.', room: 'E16-LAB. HARDWARE' },
            { id: '7a5', class: '7A', day: 'Jumat', time: '07.00 - 09.30', subject: 'Komputasi Paralel dan Terdistribusi', lecturer: 'Asril Adi Sunarto, M.Kom.', room: 'E15-LAB. LANJUT' },

            // KELAS 7B
            { id: '7b1', class: '7B', day: 'Senin', time: '07.00 - 09.30', subject: 'Computer Vision', lecturer: 'Asriyanik, M.T.', room: 'E17-LAB. DASAR' },
            { id: '7b2', class: '7B', day: 'Senin', time: '09.30 - 12.00', subject: 'Software Engineering for Specific Domain', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '7b3', class: '7B', day: 'Selasa', time: '09.30 - 12.00', subject: 'Digital Forensic', lecturer: 'Agung Pambudi, S.Kom., M.Cs.', room: 'E16-LAB. HARDWARE' },
            { id: '7b4', class: '7B', day: 'Jumat', time: '09.30 - 12.00', subject: 'Komputasi Paralel dan Terdistribusi', lecturer: 'Asril Adi Sunarto, M.Kom.', room: 'E15-LAB. LANJUT' },

            // KELAS 7C
            { id: '7c1', class: '7C', day: 'Senin', time: '13.00 - 15.30', subject: 'Software Engineering for Specific Domain', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '7c2', class: '7C', day: 'Senin', time: '15.30 - 18.00', subject: 'Computer Vision', lecturer: 'Dr. Iwan Rizal Setiawan, M.T., M.Kom.', room: 'E15-LAB. LANJUT' },
            { id: '7c3', class: '7C', day: 'Jumat', time: '13.00 - 15.30', subject: 'Komputasi Paralel dan Terdistribusi', lecturer: 'Asril Adi Sunarto, M.Kom.', room: 'E15-LAB. LANJUT' }
        ];

        // State Management
        let scheduleData = [];
        let isEditMode = false;
        let selectedClass = '3C';
        const orderOfDay = { 'Senin': 1, 'Selasa': 2, 'Rabu': 3, 'Kamis': 4, 'Jumat': 5, 'Sabtu': 6 };

        // Initialize App
        function init() {
            // Load from local storage or use initial data
            const storedData = localStorage.getItem('universitySchedule');
            if (storedData) {
                scheduleData = JSON.parse(storedData);
                document.getElementById('resetDataBtn').classList.remove('hidden');
                document.getElementById('resetDataBtn').classList.add('flex');
            } else {
                scheduleData = [...initialScheduleData];
            }

            populateClassSelector();
            renderSchedule();
            setupEventListeners();
        }

        // Populate Dropdown
        function populateClassSelector() {
            const classes = [...new Set(scheduleData.map(item => item.class))].sort();
            const selector = document.getElementById('classSelector');
            selector.innerHTML = '';
            
            classes.forEach(cls => {
                const option = document.createElement('option');
                option.value = cls;
                option.textContent = `Kelas ${cls}`;
                selector.appendChild(option);
            });
            
            // Set default selected
            if (classes.length > 0) {
                selectedClass = classes[0];
                selector.value = selectedClass;
            }
        }

        // Render Schedule based on selected class
        function renderSchedule() {
            const container = document.getElementById('scheduleContainer');
            const emptyState = document.getElementById('emptyState');
            const titleEl = document.getElementById('currentClassTitle');
            
            container.innerHTML = '';
            titleEl.textContent = `Kelas ${selectedClass}`;

            // Filter and sort data
            const filteredData = scheduleData.filter(item => item.class === selectedClass);
            
            if (filteredData.length === 0) {
                container.classList.add('hidden');
                emptyState.classList.remove('hidden');
                emptyState.classList.add('flex');
                return;
            }

            container.classList.remove('hidden');
            emptyState.classList.add('hidden');
            emptyState.classList.remove('flex');

            // Group by Day
            const grouped = filteredData.reduce((acc, item) => {
                if (!acc[item.day]) acc[item.day] = [];
                acc[item.day].push(item);
                return acc;
            }, {});

            // Sort days
            const sortedDays = Object.keys(grouped).sort((a, b) => orderOfDay[a] - orderOfDay[b]);

            sortedDays.forEach(day => {
                // Sort by time within day
                const dayItems = grouped[day].sort((a, b) => a.time.localeCompare(b.time));
                
                const daySection = document.createElement('div');
                daySection.className = 'bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden';
                
                // Day Header
                const dayHeader = document.createElement('div');
                dayHeader.className = 'bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-2';
                dayHeader.innerHTML = `
                    <i class="ph-fill ph-calendar-blank text-indigo-500 text-lg"></i>
                    <h3 class="font-semibold text-slate-800 uppercase tracking-wider text-sm">${day}</h3>
                `;
                daySection.appendChild(dayHeader);

                // List of items
                const ul = document.createElement('ul');
                ul.className = 'divide-y divide-slate-100';

                dayItems.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'p-5 hover:bg-slate-50/50 transition-colors flex flex-col sm:flex-row sm:items-center gap-4 group';
                    
                    const editButtonHtml = isEditMode ? `
                        <button onclick="openEditModal('${item.id}')" class="ml-auto mt-3 sm:mt-0 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors flex items-center gap-1 shrink-0">
                            <i class="ph ph-pencil-simple"></i> Edit
                        </button>
                    ` : '';

                    li.innerHTML = `
                        <div class="w-full sm:w-32 shrink-0">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                                <i class="ph ph-clock"></i> ${item.time}
                            </span>
                        </div>
                        <div class="flex-grow min-w-0">
                            <h4 class="text-base font-semibold text-slate-900 truncate">${item.subject}</h4>
                            <div class="mt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500">
                                <span class="flex items-center gap-1.5 truncate">
                                    <i class="ph ph-user"></i> ${item.lecturer}
                                </span>
                                <span class="hidden sm:inline text-slate-300">•</span>
                                <span class="flex items-center gap-1.5 truncate">
                                    <i class="ph ph-door"></i> ${item.room}
                                </span>
                            </div>
                        </div>
                        ${editButtonHtml}
                    `;
                    ul.appendChild(li);
                });

                daySection.appendChild(ul);
                container.appendChild(daySection);
            });
        }

        // Toggle Edit Mode
        function toggleEditMode() {
            isEditMode = !isEditMode;
            const btnText = document.getElementById('editBtnText');
            const btn = document.getElementById('toggleEditBtn');
            
            if (isEditMode) {
                btnText.textContent = 'Selesai Edit';
                btn.classList.remove('text-slate-700', 'bg-white');
                btn.classList.add('bg-indigo-50', 'text-indigo-700', 'border-indigo-200');
            } else {
                btnText.textContent = 'Mode Edit';
                btn.classList.add('text-slate-700', 'bg-white');
                btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'border-indigo-200');
            }
            
            renderSchedule();
        }

        // Open Modal
        window.openEditModal = function(id) {
            const item = scheduleData.find(i => i.id === id);
            if (!item) return;

            document.getElementById('editId').value = item.id;
            document.getElementById('editDay').value = item.day;
            document.getElementById('editTime').value = item.time;
            document.getElementById('editSubject').value = item.subject;
            document.getElementById('editLecturer').value = item.lecturer;
            document.getElementById('editRoom').value = item.room;

            const modal = document.getElementById('editModal');
            modal.classList.remove('hidden');
            // Small delay for animation
            setTimeout(() => {
                modal.firstElementChild.classList.add('modal-enter-active');
            }, 10);
        };

        // Close Modal
        function closeModal() {
            const modal = document.getElementById('editModal');
            modal.firstElementChild.classList.remove('modal-enter-active');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.getElementById('editForm').reset();
            }, 200); // match css transition
        }

        // Save Edit
        function handleEditSubmit(e) {
            e.preventDefault();
            
            const id = document.getElementById('editId').value;
            const index = scheduleData.findIndex(i => i.id === id);
            
            if (index !== -1) {
                scheduleData[index] = {
                    ...scheduleData[index],
                    day: document.getElementById('editDay').value,
                    time: document.getElementById('editTime').value,
                    subject: document.getElementById('editSubject').value,
                    lecturer: document.getElementById('editLecturer').value,
                    room: document.getElementById('editRoom').value,
                };

                // Save to localStorage
                localStorage.setItem('universitySchedule', JSON.stringify(scheduleData));
                
                // Show reset button
                document.getElementById('resetDataBtn').classList.remove('hidden');
                document.getElementById('resetDataBtn').classList.add('flex');

                closeModal();
                renderSchedule();
                showToast("Jadwal berhasil diperbarui!");
            }
        }

        // Reset Data
        function resetData() {
            localStorage.removeItem('universitySchedule');
            scheduleData = [...initialScheduleData];
            document.getElementById('resetDataBtn').classList.add('hidden');
            document.getElementById('resetDataBtn').classList.remove('flex');
            renderSchedule();
            showToast("Data dikembalikan ke jadwal asli.");
        }

        // Toast Notification
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').textContent = msg;
            
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function setupEventListeners() {
            document.getElementById('classSelector').addEventListener('change', (e) => {
                selectedClass = e.target.value;
                renderSchedule();
            });

            document.getElementById('toggleEditBtn').addEventListener('click', toggleEditMode);
            
            document.getElementById('closeModalBtn').addEventListener('click', closeModal);
            document.getElementById('cancelBtn').addEventListener('click', closeModal);
            
            document.getElementById('editForm').addEventListener('submit', handleEditSubmit);

            document.getElementById('resetDataBtn').addEventListener('click', () => {
                if(confirm("Anda yakin ingin mengembalikan semua jadwal ke data asli? Semua editan akan hilang.")) {
                    resetData();
                }
            });

            // Close modal on outside click
            document.getElementById('editModal').addEventListener('click', (e) => {
                if (e.target.id === 'editModal') {
                    closeModal();
                }
            });
        }

        // Run
        window.onload = init;