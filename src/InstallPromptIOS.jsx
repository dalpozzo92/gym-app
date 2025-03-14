import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd-mobile";
import { Share2 } from "lucide-react";  // Importa l'icona di condivisione

const isIos = () => /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
const isInStandaloneMode = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

const InstallPromptIOS = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isIos() && !isInStandaloneMode()) {
      setTimeout(() => setShowModal(true), 2000); // Mostra il popup dopo 2 secondi
    }
  }, []);

  return (
    <Modal
      visible={showModal}
      onClose={() => setShowModal(false)}
      title="Aggiungi alla schermata Home"
      footer={[
        {
          text: 'OK, ho capito!',
          onClick: () => setShowModal(false),
        },
      ]}
    >
      <p>Per installare l'app:</p>
      <ol>
        <li>
          Tocca il <Share2 size={20} style={{ marginRight: 8 }} /> pulsante Condividi in basso.
        </li>
        <li>Scorri verso il basso e seleziona <strong>Aggiungi alla schermata Home</strong>.</li>
        <li>Conferma l'installazione.</li>
      </ol>
    </Modal>
  );
};

export default InstallPromptIOS;
