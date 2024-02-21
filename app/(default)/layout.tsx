'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [pays, setPays] = useState<string[]>([])
  const [paysSelected, setPaysSelected] = useState<string>()
  const [actived, setActived] = useState<boolean>(false)
  const [imageSrc, setImageSrc] = useState<string>("/images/free-nature-images.jpg")
  const villes = [{ tel: 237, label: "Cameroun" }]

  const handleKeyDownVille = (e: any) => {
    const tab: any[] = [];
    var val = e;
    if (val !== "") {
      villes.forEach((e) => {
        if (e.tel.toString().toLowerCase().search(val.trim()) != -1) {
          tab.push(e);
        }
      });
    }
    setPays(tab)
  }

  const handleClickVille = (e: any, f: string) => {
    setPaysSelected(`${e} +${f}`)
  }

  return (
    <>
      <main>
        <div className={`fixed z-50 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 col-span-1 md:row-span-1 ${actived ? "" : "hidden"}`}>
          <div
            className="relative z-50 w-full text-xs">
            <div className="z-10 flex items-center text-lg font-bold text-blue-500 bg-white border-none rounded-full focus:ring-2 focus-within: w-96 focus-visible:ring-2 focus-visible:ring-lime-500 disabled:text-gray-600 focus:ring-gray-100 bg-inherit">
              <button className='p-5 text-sm font-thin border-r'>{paysSelected}</button>
              <input
                onChange={e => handleKeyDownVille(e.target.value)}
                type="number"
                v-model="formSearch.ville"
                id="ville"
                name="ville"
                autoComplete='off'
                className='p-5 border-none rounded-full focus-visible:outline-none focus:ring-0'
                placeholder="numéro de téléphone"
                required
              />
            </div>
            <div
              className="absolute left-0 z-50 w-full mt-3 overflow-hidden text-sm text-gray-900 bg-white rounded-full shadow-xl max-h-96"
            >
              <ul
                className="w-full h-full overflow-x-hidden text-gray-500 scroller"
              >
                {pays.map((i: any, index: number) => (
                  <li
                    className="p-5 hover:bg-blue-100"
                    key={i.tel}
                  >
                    <div
                      role='button'
                      className="flex justify-between text-sm font-bold text-blue-600 "
                      onClick={() => handleClickVille(i.label, i.tel)}
                    >

                      <span> {i.label}</span>
                      <span>+{i.tel}</span>

                    </div>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>
        <div className='absolute top-0 left-0 w-full h-full'>
          <Image src={imageSrc} width={500} alt='' onClick={() => setActived(!actived)}
            height={500} className='w-full h-full opacity-20' />
        </div>

      </main >
    </>
  )
}
