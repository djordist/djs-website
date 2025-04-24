export default function Afspraak() {
  return (
    <div>
      <h1>Maak een Afspraak</h1>
      <form>
        <label>Naam:<br /><input type="text" name="naam" /></label><br />
        <label>Email:<br /><input type="email" name="email" /></label><br />
        <label>Telefoon:<br /><input type="tel" name="telefoon" /></label><br />
        <label>Probleemomschrijving:<br /><textarea name="probleem"></textarea></label><br />
        <label>Datum voorkeur:<br /><input type="date" name="datum" /></label><br />
        <label>Tijdstip:<br />
          <select name="tijd">
            <option value="na16u">Na 16:00 (adviesgesprek)</option>
            <option value="dag">Overdag (werken)</option>
          </select>
        </label><br /><br />
        <button type="submit">Versturen</button>
      </form>
    </div>
  );
}