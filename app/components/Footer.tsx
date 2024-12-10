import { LogoIconOrangeWhite } from "@/assets/LogoIcons";
import Link from "next/link";

export default function Footer() {
  return (
      <footer className="bg-white py-10">
          <div className="max-w-7xl px-4 md:px-14 lg:px-20 xl:px-24 text-[#5F6980] text-[14px] leading-[22px]">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-1 flex ">
                    <LogoIconOrangeWhite/>
                  </div>
                  <div className="">
                      <h4 className="font-semibold text-[#282828] mb-4">Product</h4>
                      <ul className="space-y-2">
                          <li>
                              <Link href="#" className="">
                                  Features
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Pricing
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Changelog
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Support
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-semibold text-[#282828] mb-4">Legal</h4>
                      <ul className="space-y-2">
                          <li>
                              <Link href="#" className="">
                                  Terms of Privacy
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Privacy Policy
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Security
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-semibold text-[#282828] mb-4">Company</h4>
                      <ul className="space-y-2">
                          <li>
                              <Link href="#" className="">
                                  Blog
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Contact
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-semibold text-[#282828] mb-4">Social</h4>
                      <ul className="space-y-2">
                          <li>
                              <Link href="#" className="">
                                  Dribbble
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Behance
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="">
                                  Discord
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="mt-10 text-center text-[#5F6980]">
                  All rights reserved. © 2024 ThinkMetal
              </div>
          </div>
      </footer>
  )
}