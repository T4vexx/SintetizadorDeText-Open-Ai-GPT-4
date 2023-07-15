import { logo } from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
          <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>

          <button 
            type="button" 
            onClick={() => window.open("https://github.com/T4vexx")}
            className="black_btn"
          >
            Github
            </button>
        </nav>

        <h1 className="head_text">
          Sintetizador de textos com <br className="max-md:hidden" />
          <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
          Simplifique sua leitura usando Sumz, uma sintetizador de texto open-source que transforma grandes artigos em textos limpos e concisos!
        </h2>
    </header>
  )
}

export default Hero