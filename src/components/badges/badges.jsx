const BASE_URL = import.meta.env.BASE_URL;

function Badges() {
  return (
    <section
      id="badges"
      className="bg-[#030712] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-bold">
            Badges
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500"></div>

        </div>

        {/* Cards */}

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">

          {/* Badge 1 */}

          <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.18)]">

            <img
              src={`${BASE_URL}badges/gssoc.png`}
              alt="GSSoC"
              className="mx-auto mb-5 h-28 object-contain"
            />

            <h3 className="text-center text-xl font-semibold">
              GSSoC'26 Contributor
            </h3>

            <p className="mt-2 text-center text-gray-400">
              GirlScript Summer of Code
            </p>

            <p className="mt-1 text-center text-sm italic text-gray-500">
              Issuer: GirlScript Foundation
            </p>

            <div className="mt-5 text-center">

              <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
                Build • Contribute • Learn
              </span>

            </div>

          </div>

          {/* Badge 2 */}

          <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.18)]">

            <img
              src={`${BASE_URL}badges/ibm.png`}
              alt="IBM Badge"
              className="mx-auto mb-5 h-28 object-contain"
            />

            <h3 className="text-center text-xl font-semibold">
              Artificial Intelligence Fundamentals
            </h3>

            <p className="mt-2 text-center text-gray-400">
              IBM SkillsBuild
            </p>

            <p className="mt-1 text-center text-sm italic text-gray-500">
              Issuer: IBM SkillsBuild
            </p>

            <div className="mt-5 text-center">

              <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
                Verified Digital Credential
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Badges;