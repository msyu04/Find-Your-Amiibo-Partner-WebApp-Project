export default function Input({ action, action2, action3, info }) {
  function AmiiboPartner() {
    // Generate a random number based on the amiiboData length
    // Assume info is passed down or managed somehow to provide the length
    const randomNumber = Math.floor(Math.random() * (info.length || 1)); // Fallback to 1 to avoid NaN
    action(randomNumber); // Call the function to set the random number
  }

  function place(event) {
    action2(event.target.value);
  }

  function gamechange(event) {
    action3(event.target.value);
  }

  return (
    <section id="option_bar">
      <select onChange={place}>
        <option value="na">North America</option>
        <option value="au">Australia</option>
        <option value="eu">Europe</option>
        <option value="jp">Japan</option>
      </select>
      <select onChange={gamechange}>
        <option value="">All Games</option>
        <option value="Super Smash Bros.">Super Smash Bros</option>
        <option value="Animal Crossing">Animal Crossing</option>
        <option value="Splatoon">Splatoon</option>
        <option value="Legend of Zelda">Legend of Zelda</option>
      </select>
      <button onClick={AmiiboPartner}>Generate a new Amiibo Partner!!</button>
    </section>
  );
}
