const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Countdown to the first workshop day (Ankara time).
const eventStart = new Date('2026-10-16T09:00:00+03:00');
const daysNode = document.getElementById('countdown-days');
const labelNode = document.getElementById('countdown-label');

function updateCountdown() {
  if (!daysNode || !labelNode) return;
  const now = new Date();
  const ms = eventStart - now;
  if (ms > 0) {
    const days = Math.ceil(ms / 86400000);
    daysNode.textContent = String(days);
    labelNode.textContent = days === 1 ? 'day until the workshop' : 'days until the workshop';
  } else {
    daysNode.textContent = '16–17 Oct';
    labelNode.textContent = 'Workshop 2026';
  }
}
updateCountdown();

// Generate a simple .ics file without any external service.
const calendarButton = document.getElementById('calendar-button');
if (calendarButton) {
  calendarButton.addEventListener('click', () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//6th Ankara-Istanbul Workshop on Stochastic Processes//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'UID:workshop-2026-stochastic-processes@metu',
      'DTSTART;VALUE=DATE:20261016',
      'DTEND;VALUE=DATE:20261018',
      'SUMMARY:6th Ankara-Istanbul Workshop on Stochastic Processes',
      'LOCATION:Institute of Applied Mathematics, Middle East Technical University, Ankara, Türkiye',
      'DESCRIPTION:6th Ankara-Istanbul Workshop on Stochastic Processes, 16–17 October 2026.',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '6th-ankara-istanbul-workshop-2026.ics';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}
