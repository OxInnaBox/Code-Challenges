<script>
  let lightOn = false;

  function lightSwitch() {
      lightOn = !lightOn; // Toggle the state
  }
</script>

<style>
  #bg {
      display: flex;
      background-color: black;
      transition: background-color 2s;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
  }

  #imgdiv {
      margin: auto;
      width: 15%;
      text-align: center;
  }

  #lamp {
      width: 100%;
      margin: auto;
  }

  #btn {
      width: 100%;
      height: 100px;
      margin: auto;
      cursor: pointer;
  }
</style>

<div id="bg" style="background-color: {lightOn ? 'white' : 'black'};">
  <div id="imgdiv">
      <img src={lightOn ? "media/bulb-on.png" : "media/bulb-off.png"} alt="lamp" id="lamp">
      <br><br><br>
      <button id="btn" on:click={lightSwitch}>
          {lightOn ? "Turn Off" : "Turn On"}
      </button>
  </div>
</div>