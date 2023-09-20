import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form className='flex flex-col max-w-[500px] w-full'>
        <div className='pb-8'>
            <p className=' justify-center text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>

        </div>
        <div className=' w-[300] border rounded-lg border-pink-600'>
            <div class="mb-4 w-[350px] my-5 ms-20">
                <label for="name" class="block text-xl text-pink-300  font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-600" required/>
            </div>

            <div class="mb-3 w-[350px] my-5 ms-20">
                <label for="email" class="block text-pink-300 text-xl font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-600" required/>
            </div>

            <div class="mb-3 w-[350px] my-5 ms-20">
                <label for="message" class="block text-pink-300 text-xl font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-600" required></textarea>
            </div>

            <div class="flex justify-end me-20 mb-5">
                <button type="submit" class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-green-300 focus:outline-none focus:ring focus:ring-pink-200">Submit</button>
            </div>
        </div>
        
        
      </form>

    </div>
    
  )
}

export default Contact