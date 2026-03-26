import Image from 'next/image';

export default function Hero() {
  return (
    <section className='bg-[#f5f5f5] px-[8%] py-16 lg:px-[10%]'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row'>

        {/* 🔥 ESQUERDA (texto) */}
        <div className='w-full lg:w-1/2'>
          <h1 className='GolosText text-4xl font-bold leading-tight text-[var(--black)] md:text-6xl'>
            Seu poder
            <br />
            começa aqui.
            <br />

            <span className='text-[var(--second)]'>
              Equipamentos de elite
            </span>
            <br />
            com precisão e controle.
          </h1>

          <p className='mt-4 text-gray-600'>
            Qualidade profissional para quem leva desempenho a sério.
          </p>

          {/* Botões */}
          <div className='mt-6 flex gap-4'>
            <button className='rounded-lg bg-[var(--second)] px-6 py-3 font-semibold text-white hover:opacity-90'>
              Comprar
            </button>

            <button className='rounded-lg border border-gray-400 px-6 py-3 font-semibold hover:bg-gray-100'>
              Ver detalhes
            </button>
          </div>
        </div>

        {/* 🔥 DIREITA (imagem estilo card) */}
        <div className='relative flex w-full justify-center lg:w-1/2'>
          
          {/* fundo colorido */}
          <div className='absolute h-[320px] w-[260px] rounded-[30px] bg-gradient-to-br from-[var(--second)] to-orange-400 md:h-[400px] md:w-[320px]' />

          {/* imagem */}
          <Image
            src={'/312418.svg'}
            alt='Produto em destaque'
            className='relative z-10 w-[260px] object-contain md:w-[320px]'
            priority
            width={300} 
            height={300}
          />

          {/* decoração */}
          <Image
            src={'/download.png'}
            alt='icone'
            width={40}
            height={40}
            className='absolute -left-4 top-10 opacity-70'
          />
        </div>

      </div>
    </section>
  );
}