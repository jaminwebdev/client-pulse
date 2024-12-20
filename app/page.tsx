import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyDialog } from "@/components/PasskeyDialog";


const Home = async ({ searchParams }: SearchParamProps) => {

  const { admin } = await searchParams
    
  return (
    <div className="flex h-screen max-h-screen">

      {admin && <PasskeyDialog />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
              src="/assets/icons/Logo.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit" />
            <PatientForm />
            <div className="text-14-regular mt-12 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 ClientPulse
              </p>
              <Link href="/?admin=true" className="text-sky-500">
                Admin
              </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]" />
    </div>
  );
}

export default Home;
