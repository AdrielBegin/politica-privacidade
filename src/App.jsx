import { useState } from 'react'
import './App.css'

function App() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="container">
      <h1>Política de Privacidade</h1>
      
      <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <section>
        <h2>1. Introdução</h2>
        <p>
          Bem-vindo à nossa Política de Privacidade. Sua privacidade é extremamente importante para nós. 
          Esta política explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site.
        </p>
      </section>

      <section>
        <h2>2. Coleta de Informações</h2>
        <p>
          Podemos coletar informações pessoais que você nos fornece voluntariamente, como seu nome, endereço de e-mail e número de telefone, 
          quando você se inscreve em nossa newsletter ou preenche formulários em nosso site.
        </p>
        <p>
          Também coletamos automaticamente certas informações quando você visita, usa ou navega no site. 
          Essas informações não revelam sua identidade específica, mas podem incluir informações sobre dispositivo e uso.
        </p>
      </section>

      <section>
        <h2>3. Uso das Informações</h2>
        <p>
          Usamos as informações que coletamos para diversos fins, incluindo:
        </p>
        <ul>
          <li>Fornecer, operar e manter nosso site</li>
          <li>Melhorar, personalizar e expandir nosso site</li>
          <li>Entender e analisar como você usa nosso site</li>
          <li>Desenvolver novos produtos, serviços, características e funcionalidades</li>
          <li>Comunicar com você, diretamente ou através de um dos nossos parceiros</li>
        </ul>
      </section>

      <section>
        <h2>4. Compartilhamento de Dados</h2>
        <p>
          Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento, 
          exceto para parceiros de hospedagem de sites e outras partes que nos auxiliam na operação do nosso site, 
          condução de nossos negócios ou atendimento aos nossos usuários, desde que essas partes concordem em manter essas informações confidenciais.
        </p>
      </section>

      <section>
        <h2>5. Segurança</h2>
        <p>
          Valorizamos sua confiança em nos fornecer suas Informações Pessoais, portanto, estamos nos esforçando para usar meios comercialmente aceitáveis de protegê-las. 
          Mas lembre-se que nenhum método de transmissão pela internet, ou método de armazenamento eletrônico é 100% seguro e confiável.
        </p>
      </section>

      <section>
        <h2>6. Contato</h2>
        <p>
          Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar.
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
