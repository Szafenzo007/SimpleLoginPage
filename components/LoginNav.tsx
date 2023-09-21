import Image from "next/image"


const LoginNav = () => {
    return (
      <div className=" w-full flex items-center justify-center bg-gradient-to-br from-yellow-200 via-red-300 to-gray-900 dark:from-gray-900 dark:via-red-700 dark:to-black">
        <Image
          src='/007.png'
          alt=''
          width={500}
          height={500}
          className=""
          />
      </div>
    )
  }
  
  export default LoginNav