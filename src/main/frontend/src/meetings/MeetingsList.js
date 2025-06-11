export default function MeetingsList({meetings, onDelete, onSignIn, onSignOut}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th>Usuń</th>
                <th>Rejestracja</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>
                        {
                            meeting.participants.length > 0
                                ? <ul>{meeting.participants.map(p => <li key={p}>{p}</li>)}</ul>
                                : <em>Brak uczestników</em>
                        }
                    </td>
                    <td>
                        <button
                            type="button"
                            className="button-outline"
                            onClick={() => onDelete(meeting)}
                            disabled={meeting.participants.length > 0}
                        >
                            Usuń
                        </button>
                        {meeting.participants.length > 0 && (
                            <div style={{ fontSize: '0.8em', color: 'gray' }}>
                                Nie można usunąć – są zapisani uczestnicy
                            </div>
                        )}
                    </td>
                    <td>
                        <button type="button"
                                className="button-outline"
                                onClick={() => onSignIn(meeting)}> Zapisz się!</button>
                        <button type="button"
                                className="button-outline"
                                onClick={() => onSignOut(meeting)}> Wypisz się</button>
                    </td>


                </tr>)
            }
            </tbody>
        </table>
    );
}
