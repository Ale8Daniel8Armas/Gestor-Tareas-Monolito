import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrap5Theme from '@fullcalendar/bootstrap5'; // Importa el tema de Bootstrap 5
import esLocale from '@fullcalendar/core/locales/es'; // Importa la localización en español

interface Event {
  id: string;
  title: string;
  start: string;
}

const Calendar: React.FC<{ newEvents: Event[] }> = ({ newEvents }) => {
  const [events, setEvents] = useState<Event[]>(newEvents);

  useEffect(() => {
    setEvents(newEvents);
  }, [newEvents]);

  const handleDateSelect = (selectInfo: any) => {
    let title = prompt('Ingrese el título del evento');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // Clear date selection

    if (title) {
      let newEvent = {
        id: String(events.length + 1),
        title,
        start: selectInfo.startStr,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (clickInfo: any) => {
    if (confirm(`¿Está seguro de que desea eliminar el evento '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
      setEvents(events.filter(event => event.id !== clickInfo.event.id));
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      themeSystem="bootstrap5" // Usa el tema de Bootstrap 5
      initialView="dayGridMonth"
      selectable={true}
      selectMirror={true}
      events={events}
      select={handleDateSelect}
      eventClick={handleEventClick}
      eventContent={(eventContent: any) => (
        <span>{eventContent.event.title}</span>
      )}
      locale={esLocale} // Configura el idioma a español
      headerToolbar={{ // Personaliza el encabezado
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      }}
      eventClassNames="my-custom-event-class" // Aplica una clase CSS personalizada a los eventos
    />
  );
};

export default Calendar;
