import React from "react";

class Contact extends React.Component {
render(){
    return(
        <main>
        <section class="container blue-dotted-background">
          <h1 class="centered">Skicka ett meddelande</h1>
          <div class="content">
            <div class="content-half full-height">
              <form action="https://example.com/" class="">
                <div class="input-container">
                  <input
                    type="text"
                    placeholder="Namn"
                    class="input-container-name"
                  />
                  <input
                    type="email"
                    placeholder="E-post"
                    class="input-container-email"
                  />
                </div>
  
                <input type="text" placeholder="Ämne" />
                <textarea cols="30" rows="10" placeholder="Meddelande"></textarea>
                <button>Skicka</button>
              </form>
            </div>
            <div class="content-half" style={{ textAlign: "end" }}>
              <iframe
                title="map"
                class="map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=17.92981624603272%2C62.619996844530554%2C17.965865135192875%2C62.634006332992485&amp;layer=hot&amp;marker=62.62700241576875%2C17.947840690612793"
              ></iframe>
              <p>Hovsgatan 17<br />871 31 Härnösand</p>
              <p>
                0611-20215
                <br />
                datorbutikenarb@outlook.com
              </p>
            </div>
          </div>
        </section>
      </main>
    );
}
}

export default Contact;