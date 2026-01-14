import { useState } from 'react'
import './App.css'

function App() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="container">
      <h1>Política de Privacidade – Discípulos em Cuiabá</h1>
      
      <p>Última atualização: 13/01/2026</p>

      <section>
        <h2>1. Introdução</h2>
        <p>
          Esta Política de Privacidade descreve como o aplicativo Discípulos em Cuiabá, desenvolvido por NA Tecnologia, disponível para dispositivos Android por meio da Google Play Store, trata as informações dos usuários.
        </p>
        <p>
          A sua privacidade é importante para nós. Este aplicativo foi desenvolvido para funcionar sem a coleta de dados pessoais dos usuários.
        </p>
      </section>

      <section>
        <h2>2. Coleta de informações</h2>
        <p>
          O aplicativo Discípulos em Cuiabá não coleta, armazena nem compartilha informações pessoais, como nome, endereço de e-mail, número de telefone ou dados de identificação do usuário.
        </p>
        <p>
          O aplicativo também não utiliza ferramentas de análise, rastreamento ou serviços de terceiros que coletem dados do usuário.
        </p>
      </section>

      <section>
        <h2>3. Uso das informações</h2>
        <p>
          Como o aplicativo não coleta dados pessoais, nenhuma informação é utilizada para fins de identificação, marketing ou análise comportamental.
        </p>
      </section>

      <section>
        <h2>4. Compartilhamento de dados</h2>
        <p>
          O aplicativo não compartilha dados com terceiros, uma vez que nenhuma informação pessoal é coletada.
        </p>
      </section>

      <section>
        <h2>5. Segurança</h2>
        <p>
          Embora o aplicativo não realize coleta de dados pessoais, adotamos boas práticas de desenvolvimento para garantir o funcionamento seguro e confiável do aplicativo.
        </p>
      </section>

      <section>
        <h2>6. Alterações nesta política</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada para refletir melhorias no aplicativo ou mudanças legais. Qualquer alteração será publicada nesta página.
        </p>
      </section>

      <section>
        <h2>7. Contato</h2>
        <p>
          Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail:
        </p>
        <p>
          📧 <a href="mailto:natecnologialtda@gmail.com">natecnologialtda@gmail.com</a>
        </p>
      </section>

      {!accepted ? (
        <button className="accept-btn" onClick={() => setAccepted(true)}>
          Aceitar e Continuar
        </button>
      ) : (
        <p style={{ marginTop: '2rem', color: '#28a745', fontWeight: 'bold' }}>
          Você aceitou a política de privacidade.
        </p>
      )}
    </div>
  )
}

export default App
