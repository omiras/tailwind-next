import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1 className="text-green-800 bg-yellow-500 font-bold text-center border-2 border-black">Hi!</h1>
      <p className='whitespace-pre antialiased mt-oscar bg-oscar text-sm md:text-lg'>Lorem   ipsum dolor, sit amet consectetur adipisicing elit. Temporibus necessitatibus sed id distinctio impedit repudiandae at ipsum. Soluta explicabo dolor laborum architecto corporis tenetur, labore, quisquam necessitatibus dolore, harum voluptatibus.</p>
      <p className='text-[#FF00CC] decoration-2 decoration-wavy decoration-red-500 underline'>Ejemplo valor arbitrario</p>
      <button className='btn-blue'>Test plugin button</button>
    </main>
  )
}
