'use client'
import Image from 'next/image'
import { useState } from 'react'

interface Ville {
  tel: string,
  label: string,
  img: string
}
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [pays, setPays] = useState<any[]>([])
  const [paysSelected, setPaysSelected] = useState<any>()
  const [actived, setActived] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(false)
  const [imageSrc, setImageSrc] = useState<string>("/images/background.jpg")
  const villes: Ville[] = [
    {
      tel: "213",
      img: "/images/DZ.png",
      label: "Algeria"
    }
    , {
      tel: "244",
      label: "Usa",
      img: "/images/AO.png"
    },
    {
      tel: "267",
      label: "Botswana",
      img: "/images/BW.png"
    },
    {
      tel: "237",
      label: "Cameroun",
      img: "/images/CM.png"
    },
    {
      tel: "237",
      label: "Cameroun",
      img: "/images/CM.png"
    },
    {
      tel: "237",
      label: "Cameroun",
      img: "/images/CM.png"
    },
    {
      tel: "237",
      label: "Cameroun",
      img: "/images/CM.png"
    },
    {
      tel: "237",
      label: "Cameroun",
      img: "/images/CM.png"
    },
    {
      tel: "237",
      label: "Cameroun",
      img: "/images/CM.png"
    },
  ]


  const handleKeyDownVille = (e: string) => {
    const tab: any[] = [];
    var val = e;
    if (val !== "") {
      villes.forEach((e) => {
        if ( (e.tel.toString().toLowerCase().search(val.trim().toString()) != -1)) {
          tab.push(e);
        }
        // if (val.trim().toString() === "+") {
        //   if (e.tel.toString().toLowerCase().search(/[+][0-9]{2}/) != -1) {
        //     tab.push(e);
        //   }
        // }else 
      });
    }
    setPays(tab)
  }

  const handleClickVille = (e: any) => {
    setPaysSelected(e)
    setPays([])
  }
  const onClick = () => {
    if (clicked) {
      setPays(villes)
      setClicked(false)
    }else{
      setPays([])
      setClicked(true)
    }
  
  }
  return (
    <>
      <main >
       { hidden ? null : (
         <div className='fixed z-20 -translate-x-1/2 top-20 left-1/2 '>
         <input
           onChange={e => setImageSrc(e.target.value)}
           type="text"
           v-model="formSearch.ville"
           id="ville"
           name="ville"
           autoComplete='off'
           className='block p-5 border-none rounded-full focus-visible:outline-none focus:ring-0'
           placeholder="url Image"
         />
         <button onClick={() => setHidden(true)}>Fermer</button>
       </div>
       )}
        <div  className={`fixed rounded-3xl bg-white border p-10 z-50 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 col-span-1 md:row-span-1 ${actived ? "" : "hidden"}`}>
        <h2 className='text-xl font-bold text-center text-blue-400' >Titre</h2>
          <div 
            className={` ${pays.length > 0 ? 'ring-2 ring-lime-300' : ""} relative z-50 w-full  text-xs border rounded-full border-stone-400`}>
           
            <div className="z-10 flex items-center overflow-hidden text-lg font-bold text-blue-500 bg-white border-none rounded-full focus:ring-2 focus-within: w-96 focus-visible:ring-2 focus-visible:ring-lime-500 disabled:text-gray-600 focus:ring-gray-100 bg-inherit">
              <button onClick={onClick} className='flex p-5 text-xs font-bold border-r border-stone-400'> {!paysSelected ? "search" : (
                  <div className='flex items-center gap-1'>
                    <div className='w-8 h-8 overflow-hidden rounded-full bg-slate-200'>
                      <Image src={paysSelected.img} width={32} height={32} alt='image' />
                    </div>
                    <span> {paysSelected.label}</span>
                    <span>{paysSelected.tel}</span>
                  </div>
                )}</button>
              <input
                onChange={e => handleKeyDownVille(e.target.value)}
                type="text"
                v-model="formSearch.ville"
                id="ville"
                name="ville"
                onClick={onClick}
                autoComplete='off'
                className='p-5 border-none rounded-full focus-visible:outline-none focus:ring-0'
                placeholder="numéro de téléphone"

              />
            </div>
            { 
              pays.length > 0 ? (
                  <div
              className="absolute left-0 z-50 w-full mt-3 overflow-hidden overflow-y-auto text-sm text-gray-900 bg-white border shadow-xl rounded-3xl max-h-96"
            >
              <ul
                className="w-full h-full overflow-x-hidden text-gray-500"
              >
                <li className='p-5 font-bold text-gray-600 bg-gray-50'>Search country</li>
                {pays.map((i: any, index: number) => (
                  <li
                    className="p-5 hover:bg-blue-100"
                    key={i.tel}
                  >
                    <div
                      role='button'
                      className="flex justify-between text-sm font-bold text-blue-600 "
                      onClick={() => handleClickVille(i)}
                    >
                       <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 overflow-hidden rounded-full bg-slate-200'>
                              <Image src={i.img} width={32} height={32} alt='image' />
                            </div>
                            <span> {i.label}</span>
                          </div>
                      
                      <span>+{i.tel}</span>

                    </div>
                  </li>
                ))}

              </ul>
            </div>
              ) : null}
          </div>
          <button className='w-full p-5 mt-5 text-xl font-semibold text-teal-700 rounded-full bg-lime-400'>Start top-up</button>
                  <button onClick={() => setActived(false)} className='p-2 text-stone-800 '>Close</button>
        </div>
        <div className='relative top-0 left-0 w-full h-full'>
          <div className=''>

          </div>
          <Image src={imageSrc == "" ? "/images/background.jpg" : imageSrc} width={500} sizes="100vw"
            style={{ width: '100%', height: 'auto' }} alt='' onClick={() => setActived(true)}
            height={500} className='w-full h-full opacity-20' />
        </div>

      </main >
    </>
  )
}
