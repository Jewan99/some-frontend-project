const standingsData = {
    west: [
      { rank:1, name:'Vortex', color:'#3A2E5C', wl:'14–2', diff:'+61', form:['w','w','w','w','l'] },
      { rank:2, name:'Cinder', color:'#5C3A2E', wl:'12–4', diff:'+38', form:['w','w','l','w','w'] },
      { rank:3, name:'Glacier', color:'#2E4E5C', wl:'11–5', diff:'+22', form:['l','w','w','w','l'] },
      { rank:4, name:'Driftwood', color:'#3E5C2E', wl:'9–7', diff:'+4', form:['w','l','w','l','w'] },
      { rank:5, name:'Nightshift', color:'#5C2E4A', wl:'7–9', diff:'-9', form:['l','l','w','l','w'] },
      { rank:6, name:'Redline', color:'#5C4A2E', wl:'5–11', diff:'-27', form:['l','l','l','w','l'] },
    ],
    east: [
      { rank:1, name:'Halo Six', color:'#2E5C55', wl:'15–1', diff:'+70', form:['w','w','w','w','w'] },
      { rank:2, name:'Ashfall', color:'#1F4A4D', wl:'12–4', diff:'+35', form:['w','l','w','w','w'] },
      { rank:3, name:'Ferrous', color:'#4A2E5C', wl:'10–6', diff:'+15', form:['w','w','l','l','w'] },
      { rank:4, name:'Lowtide', color:'#2E3F5C', wl:'8–8', diff:'0', form:['l','w','l','w','l'] },
      { rank:5, name:'Marrow', color:'#5C2E2E', wl:'6–10', diff:'-18', form:['l','l','w','l','l'] },
      { rank:6, name:'Wraithbind', color:'#3E2E5C', wl:'4–12', diff:'-40', form:['l','l','l','l','w'] },
    ]
  };
 
  function initials(name){
    return name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  }
 
  function renderStandings(region){
    const body = document.getElementById('standings-body');
    body.innerHTML = '';
    standingsData[region].forEach(team => {
      const tr = document.createElement('tr');
      const diffClass = team.diff.startsWith('-') ? 'diff-neg' : 'diff-pos';
      const formHtml = team.form.map(f => `<span class="form-dot ${f === 'w' ? 'fd-w' : 'fd-l'}"></span>`).join('');
      tr.innerHTML = `
        <td class="rank-num ${team.rank === 1 ? 'top' : ''}">${team.rank}</td>
        <td>
          <div class="team-cell">
            <span class="mini-emblem" style="background:${team.color};"></span>
            ${team.name}
          </div>
        </td>
        <td>${team.wl}</td>
        <td class="${diffClass}">${team.diff}</td>
        <td><div class="form-dots">${formHtml}</div></td>
      `;
      body.appendChild(tr);
    });
  }
 
  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderStandings(btn.dataset.region);
    });
  });
 
  renderStandings('west');
 
  let viewers = 142880;
  setInterval(() => {
    viewers += Math.floor(Math.random() * 60) - 20;
    document.getElementById('global-viewers').textContent = viewers.toLocaleString();
  }, 2200);
 
  let seconds = 14 * 60 + 22;
  const clockEl = document.getElementById('match-clock');
  setInterval(() => {
    seconds = seconds > 0 ? seconds - 1 : 14 * 60 + 22;
    const m = Math.floor(seconds / 60);
    const s = String(seconds % 60).padStart(2, '0');
    clockEl.textContent = `${m}:${s} remaining`;
  }, 1000);