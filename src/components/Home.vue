<template>

 <div class="container h-screen flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
            <div class="w-full md:w-1/2">
                <div class="max-w-7xl">
                    <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">Welcome to CyberBuddy</h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">We help people in understanding the cyber needs for them & support them with thier day-to-day queries.</p>
                    <div class="grid gap-6 mt-8 sm:grid-cols-2">
                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>No maintenance</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>pay as you go</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>AWS NLP Models</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Appointment Scheduling with Specialist</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Data security</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Integration with NIDS(beta)</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full h-2/3 md:w-1/2">
                <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://miro.medium.com/max/5600/1*RD1s9xBIvd_ycJUnX12Tyw@2x.png" alt="glasses photo">
            </div>
        </div>


</template>

<script>
export default {
  name: 'home',
}

</script>