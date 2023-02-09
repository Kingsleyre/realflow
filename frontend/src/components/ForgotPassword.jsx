import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function ForgotPassword() {
  return (
    <section class="bg-[url('assets/realflowimage.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-80">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-white"></a>
        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create New Password
          </h2>
          <h2 class="mb-1 text-xl font-regular leading-tight tracking-tight text-gray-400 md:text-sm dark:text-white">
            Your new password must be different from previous used passwords.
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required=""></input>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""></input>
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm password
              </label>
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""></input>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""></input>
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="newsletter"
                  class="font-light text-gray-500 dark:text-gray-300">
                  I accept the{' '}
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <div class="w-full md:w-full  mb-6">
              <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}