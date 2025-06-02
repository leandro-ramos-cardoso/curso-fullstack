import React from 'react'
import styles from './Campanha.module.css'

const Campanha = ({ mes }) => {

    function defineMesagem(mesDaCampanha) {
        if (mesDaCampanha === "setembro") {
            return "Prevenção ao suicídio"
        } else if (mesDaCampanha === "outubro") {
            return "Conscientização sobre o câncer de mama"
        } else if (mesDaCampanha === "novembro") {
            return "Prevenção e Combate ao câncer de próstata"
        }
    }

    function defineCorDeFundo(mesDaCampanha) {
        if (mesDaCampanha === "setembro") {
            return styles.setembro
        } else if (mesDaCampanha === "outubro") {
            return styles.outubro
        } else if (mesDaCampanha === "novembro") {
            return styles.novembro
        }

    }

  return (
    <div className={defineCorDeFundo(mes)}>
        {defineMesagem(mes)}
    </div>
  )
}

export default Campanha