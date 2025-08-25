
import { use, useState} from "react"
import Carousel from "./Carousel";

function App() {

  const [step, setStep] = useState(0); //controla a tela
  const [noPosition, setNoPosition] = useState({top: "50%", left: "60%"});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


// adiciona esse estado
const [escaped, setEscaped] = useState(false);

 //função que move o botão "não"
const moveNoButton = () => {
  setEscaped(true); // ativa o modo "fugitivo"
  const randTop = Math.floor(Math.random() * 80) + "%";
  const randLeft = Math.floor(Math.random() * 80) + "%";
  setNoPosition({ top: randTop, left: randLeft });
};

  // função pra resetar o botão "não" quando mudar de tela
  const resetNoButton = () => {
    setEscaped(false);
    setNoPosition({ top: "50%", left: "60%" });
  };


  // valida login

    const handleLogin = (e) => {
      e.preventDefault();
        const validNames = ["ursinha", "momo", "amor"];
        if(validNames.includes(name.toLowerCase()) && password === "3003"){
          setStep(step + 1);
          setError("");
        } else{
          setError("Nome ou senha incorretas! tente novamente Momo hehehehe 🐻");
        }
    };


     // componente dos botões Sim/Não
  const YesNoButtons = ({ onYes }) => (
    <div className="flex gap-4 justify-center relative mt-6">
      <button
        onClick={onYes}
        className="bg-green-500 h-16 w-24 font-bold text-2xl text-white px-6 py-2 rounded-lg hover:bg-green-300"
      >
        Sim
      </button>
      <button
        onMouseEnter={moveNoButton}
        style={
          escaped
            ? { position: "absolute", top: noPosition.top, left: noPosition.left }
            : { position: "static" }
        }
        className="bg-red-500 h-16 w-24 text-white px-6 py-2 rounded-lg font-bold text-2xl"
      >
        Não
      </button>
    </div>
  );

  return (

    <div className="flex items-center justify-center h-screen bg-purple-700 text-center relative px-4">
      {step === 0 && (
        <div>
          <img
            src="ursinho8.gif"
            alt="Urso fofo"
            className="w-80 h-80 mx-auto mb-6 rounded-[50px] shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-6 text-white">
            Amor esta preparada?
          </h1>
          <YesNoButtons
            onYes={() => {
              setStep(1);
              resetNoButton();
            }}
          />
        </div>
      )}

          {step === 1 && (
        <div>
          <img
            src="ursinho6.gif"
            alt="Urso fofo"
            className="w-80 h-80 mx-auto mb-6 rounded-[50px] shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-6 text-white">
            Tenho uma surpresa para o meu amor, quer ver?
          </h1>
          <YesNoButtons
            onYes={() => {
              setStep(2);
              resetNoButton();
            }}
          />
        </div>
      )}

       {step === 2 && (
        <div>
          <img
            src="ursinho9.gif"
            alt="Urso fofo"
            className="w-80 h-80 mx-auto mb-6 rounded-[50px] shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-6 text-white">
          é um presente quer ver?
          </h1>
          <YesNoButtons
            onYes={() => {
              setStep(3);
              resetNoButton();
            }}
          />
        </div>
      )}

         {step === 3 && (
        <div>
          <img
            src="ursinho7.gif"
            alt="Urso fofo"
            className="w-80 h-80 mx-auto mb-6 rounded-[50px] shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-6 text-white">
           Tem certeza que quer ver seu presente?
          </h1>
          <YesNoButtons
            onYes={() => {
              setStep(4);
              resetNoButton();
            }}
          />
        </div>
      )}




       {step === 4 && (
        <div>
          <img
            src="ursinho.gif"
            alt="Urso fofo"
            className="w-80 h-80 mx-auto mb-6 rounded-[50px] shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-6 text-white">
            Quer abrir seu presente mesmooooooo?🐻
          </h1>
          <YesNoButtons
            onYes={() => {
              setStep(5);
              resetNoButton();
            }}
          />
        </div>
      )}


       {step === 5 &&(
              <div>
              <img
              src="ursinho2.gif"
              alt="segundo urso"
              className="w-80 h-80 mx-auto mb-6 rounded-[50px] shadow-lg" 
              />
              <h1 className="text-3xl font-bold mb-6 text-white">
                Você tem certeza mesmooooo? 🐻
              </h1>

              <YesNoButtons
              onYes={() =>{
                setStep(6);
                resetNoButton();
              }}
              />
              </div>
          )}


          {step === 6  && (
            <form onSubmit={handleLogin} className="bg-purple-100 p-2 rounded-xl shadow-lg" >
              <img
              src="ursinho3.gif"
              alt=""
              className="rounded-[70px]"  
                />
              <h2 className="text-2xl font-bold mb-1">Preencha o Formulário</h2>
              <div className="flex flex-col gap-4">
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Nome:</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="border  rounded w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Senha:</label>
              <input
                type="password"
                placeholder="Senha"
                className="border p-3 rounded w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button className="bg-purple-900 text-white px-6 py-3 rounded-lg w-full mt-6 hover:bg-purple-400">
            Entrar
          </button>
            </form>
          )}

          {step === 7 && (
            <div>
            <div className="flex gap-4 justify-center">
            <img src="ursinho4.gif" alt="ursinho" className="w-48" />
            <img src="ursinho 5.gif" alt="ursinho" className="w-48" />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-white">Você está preparada para o seu presente? 🎁</h1>
            <YesNoButtons
            onYes={() => {
              setStep(8);
              resetNoButton();
            }}
            />
            </div>
          )}

           {step === 8 && (
        <div className="p-6 text-center overflow-y-auto h-full w-full">
          <h1 className="text-5xl font-bold mb-4 text-white">💝Sobre você</h1>
          <p className="mb-4 text-white text-2xl text-justify font-semibold7">
            Meu amor, esse texto é exclusivamente para enaltecer você e te mostrar o quanto é especial. Você é inteligente, linda, gentil, carinhosa, responsável... você é a melhor! Além de ser amada por todos, você se importa genuinamente com as pessoas ao seu redor, e eu amo muito isso em você.
Mesmo quando está cansada, desanimada ou ansiosa, você ainda tenta dar o seu melhor — seja na faculdade ou para ajudar alguém. Você é definitivamente uma pessoa em quem se pode contar a qualquer momento, muitas vezes colocando os outros antes de si mesma. Isso mostra apenas 1% da sua imensa gentileza.
Saiba que você é muito amada por todos: sua família, seus amigos e, claro, pelo seu namorado (vulgo eu hehehe). Eu te amo muito! Feliz aniversário, meu amor. ❤️
          </p>
         
         <Carousel
      images={[
        "solo1.jpeg",
        "solo2.jpeg",
        "solo3.jpeg",
        "solo4.jpeg",
        "solo5.jpeg",
        "solo6.jpeg",
        "solo7.jpeg",
        "solo8.jpeg",
        "solo10.jpeg",
        "solo11.jpeg",
        "solo12.jpeg",
        "solo13.jpeg",
        "solo15.jpeg",
        "solo17.jpeg",
        "solo18.jpeg",
        "solo19.jpeg",
      ]}
    />

          <h1 className="text-5xl font-bold mb-4 text-white pt-3">💝Sobre nós</h1>
          <p className="mb-4 text-white text-2xl text-justify font-semibold">
         Oi, minha vida! Mais um ano de vida seu ao meu lado — e de muitos outros que ainda virão. Espero poder passar contigo todos os aniversários e datas especiais da nossa vida juntos. Eu te amo muito, muito, muito!
Te conhecer foi a melhor coisa que aconteceu na minha vida. Como já te disse várias vezes, minha vida sem você não seria a mesma: sem o teu cheiro, teu carinho, teu amor e teus abraços. Eu já falei inúmeras vezes como você é especial para mim e como eu te amo tanto, tanto, tanto.
Amo fazer qualquer coisa ao teu lado: ir ao cinema, sair, assistir séries ou filmes de terror (mesmo quando você fica com medo hehe), ou até mesmo não fazer nada e apenas ficar juntinhos.
Mesmo que a gente não durma junto todos os dias ou não se veja sempre, aqueles cinco minutinhos quando eu volto do curso e consigo te ver já são muito especiais pra mim. Te beijar, te abraçar ou simplesmente te ver já é o suficiente.
Eu te amo tanto que até parece que o “te amo” é pouco. Te abraçar, dormir agarradinho e ainda sentir que não estou perto o suficiente... te beijar, te cheirar... parece pouco diante do que sinto por você.
Eu te amo muito e vou te amar pelo resto da minha vida, minha ursinha. Espero que esse dia esteja sendo tão especial para você quanto é para mim. Te amo muito, muito, muito. Feliz aniversário, meu amorzinho. ❤️
          </p>
        <Carousel
        images={[
        "momo1.jpeg",
        "momo2.jpeg",
        "momo3.jpeg",
        "momo4.jpeg",
        "momo5.jpeg",
        "momo6.jpeg",
        "momo7.jpeg",
        "momo8.jpeg",
        "momo9.jpeg",
        "solo9.jpeg",
        "momo10.jpeg",
        "momo11.jpeg",
        "momo12.jpeg",
        "momo13.jpeg",
        "momo14.jpeg",
        "momo15.jpeg",
        "momo16.jpeg",
        "momo17.jpeg",
        "momo18.jpeg",
        "momo19.jpeg",
        "momo20.jpeg",
        "momo21.jpeg",
        "momo22.jpeg",
        "momo23.jpeg",
        "momo24.jpeg",
        "momo25.jpeg",
        "momo26.jpeg",
        "momo27.jpeg",
        "momo28.jpeg",
        "momo29.jpeg",
        "momo30.jpeg",
        "momo31.jpeg",
        "momo32.jpeg",
        "momo33.jpeg",
        "momo34.jpeg",
        "momo35.jpeg",
        "momo36.jpeg",
        "momo37.jpeg",
        "momo38.jpeg",
        "momo39.jpeg",
        "momo40.jpeg",
        "momo41.jpeg",
        "momo42.jpeg",
        "momo43.jpeg",
      ]}
    />
        </div>
      )}


        </div>
  )
}

export default App
