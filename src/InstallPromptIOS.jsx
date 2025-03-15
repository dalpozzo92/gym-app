import React, { useEffect, useState } from "react";
import { Modal } from "antd-mobile"; // Importa Modal da Ant Design Mobile
import { Share } from "lucide-react";  // Importa l'icona di condivisione

// Funzione per rilevare se il dispositivo è un iPhone
const isIos = () => /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
// Funzione per verificare se l'app è già in modalità standalone (cioè se è stata aggiunta alla schermata home)
const isInStandaloneMode = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

const InstallPromptIOS = () => {
    const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isIos() && !isInStandaloneMode()) {
      // Mostra il Modal automaticamente dopo 2 secondi su iOS (quando non è in modalità standalone)
      Modal.alert({
        title: 'Aggiungi alla schermata Home!', // Titolo del Modal
        confirmText: 'OK, ho capito!',  // Etichetta del pulsante in italiano

        content: (
            <>
<div>
            <p>Per installare l'app:</p>
            <ol>
              <li>
                Tocca il  pulsante Condividi <Share size={18} style={{ marginRight: 6 }} /> in basso.
              </li>
              <li>Scorri verso il basso e seleziona <strong>Aggiungi alla schermata Home</strong>.</li>
              <li>Conferma l'installazione.</li>
            </ol>
          </div>
            </>
        )  
         // Contenuto del Modal
       
    }
      );
    }
  }, []);

  return null
};

export default InstallPromptIOS;
