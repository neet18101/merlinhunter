import React from "react";

const PolicyData = [
  {
    policyDate: "15th Jan 2024",
    policyContant: `Merlin, Hunter & Associates takes your privacy seriously. That is why we will only use your
      personal information to provide you with the products and services you have requested, as
      well as to administer your account. We will not sell or share your information with
      third-parties you grant us explicit permission to do so, and we will never use your personal
      data for any reason other than the reasons described within this policy`,
    policyContant1: "When we refer to 'Merlin Hunter', we mean the Merlin Hunter entity that acts as the controller or processor of your information, as explained in more detail in the 'Identifying the Data Controller and Processor' section below.",
    heading2: `About our privacy policy`,
    para: `Our privacy policy outlines your relationship with our company and explains in detail how we
      use the information that you provide us with`,
    heading3: `About Merlin, Hunter & Associates`,
    para1: `Merlin, Hunter & Associates is the trading name of Merlin, Hunter & Associates, which is
      registered in England and registered with the UK’s Information Commissioner’s Office under
      the Data Protection Act 2018. Our data controller is James Aguilan, and we encourage you
      to get in touch with any questions you may have about Merlin, Hunter & Associates.`,
    heading4: `You can reach us by`,
    para2: [
      {
        list: "Post",
        value: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ"
      },
      {
        list: "Telephone",
        value: "+44 20 7238 8000"
      },
      {
        list: "Email",
        value: " james@merlinhunter.com",
      },
      {
        list: "Website",
        value: "www.merlinhunter.com"
      }
    ],
    policyList: [
      {
        heading: "About our privacy policy",
        para: `Our privacy policy outlines your relationship with our company and explains in detail how we
          use the information that you provide us with.
          `,
      },
      {
        heading: "Information we collect and its use",
        para: "Lorem ipsum dolor sit amet. Vel perspiciatis ipsa vel ratione repellat ut voluptatibus harum vel dolores porro et quia dolor et doloremque distinctio. Est doloremque optio et doloribus galisum eum quidem nihil aut corrupti accusamus et laborum architecto.",
      },
      {
        heading: "Information we collect and its use",
        para: "Lorem ipsum dolor sit amet. Vel perspiciatis ipsa vel ratione repellat ut voluptatibus harum vel dolores porro et quia dolor et doloremque distinctio. Est doloremque optio et doloribus galisum eum quidem nihil aut corrupti accusamus et laborum architecto.",
      }
    ]
  }
]

const PrivacyPolicys = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start my-[100px] gap-[100px]">
      <div className="w-full">
        <div className="flex items-start flex-col gap-[15px]">
          <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-bold">
            Effective date:{PolicyData[0].policyDate}
          </h3>
          <p className="text-[14px] font-sans ">
            {PolicyData[0].policyContant}
          </p>
          <p className="text-[14px] font-sans">
            {PolicyData[0].policyContant1}
          </p>
        </div>
        <div className="flex items-start flex-col gap-[15px] py-[30px]">
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">{PolicyData[0].heading2}</h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              {PolicyData[0]?.para}
            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">{PolicyData[0].heading3}</h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              {PolicyData[0]?.para1}
            </p>
          </div>


          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">{PolicyData[0].heading4} :</h3>
            </div>
            {
              PolicyData[0].para2.map((item, index) => (
                <li className="text-[14px] font-sans px-[18px] my-[5px]">
                  {item?.list}: {item?.value}
                </li>

              ))
            }
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Changing your preferences</h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              If you’d like to change your web, contact or marketing preferences, you can do so at any
              time. Simply contact us at james@merlinhunter.com to request the necessary amendments.
            </p>
          </div>

          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">How we do business</h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates is committed to upholding and maintaining your personal rights.
              We operate our business in-line with the European Union’s General Data Protection
              Regulation and observe your rights to change or withdraw your opt-in options at any time. As
              part of our ongoing commitment to uphold your rights, Merlin, Hunter & Associates will also
              extend advice on how you can issue formal complaints to relevant authorities, such as the
              Information Commissioner’s Office.
            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Sensitive data
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates is committed to upholding and maintaining your personal rights.
              We operate our business in-line with the European Union’s General Data Protection
              Regulation and observe your rights to change or withdraw your opt-in options at any time. As
              part of our ongoing commitment to uphold your rights, Merlin, Hunter & Associates will also
              extend advice on how you can issue formal complaints to relevant authorities, such as the
              Information Commissioner’s Office.
            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Who our privacy policy applies to
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              This privacy policy has been developed to inform users of Merlin, Hunter & Associates how
              we use their data. Merlin, Hunter & Associates is a investigatory service provider, and we
              need to process the data of individuals to offer our products and/or services. Bearing that in
              mind, our privacy policy applies to any and all individuals registered with us as a user,
              customer, administrator or in any other capacity.

            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">What information this policy applies to
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              There is a lawful basis for processing your data, and this section of our privacy policy
              outlines how this applies to the personal information you provide us with or allow us to
              collect.
            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row ">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">The information this policy applies to includes information that you:
              </h3>
            </div>

            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Provide as part of any registration process
            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Provide as part of any campaign creation activity
            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Provide in the form of numerical data, metadata or communications
            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Give us as part of our ongoing relationship
            </li>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row ">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">This policy also applies to information that we:
              </h3>


            </div>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Collect relating to how you interact with our website
            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Must process to complete purchases and other transactions
            </li>

          </div>

          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Consent
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Please note that when you submit personal data on our website, you are giving Merlin,
              Hunter & Associates your explicit consent that we can use that data in line with our privacy
              policy.
            </p>
          </div>

          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Opting-out
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              After giving Merlin, Hunter & Associates your consent, you are free to amend your consent
              or withdraw your consent at any time. You have the right to object to the processing of your
              data. To opt-out, change your preferences or revoke your consent, simply contact us by
              emailing james@merlinhunter.com.
            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium"><i>Data processing and storage</i>
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates collects and stores data in the UK. We will store your data for a
              period of 6 months after your last recorded login attempt unless otherwise noted and
              explicitly stated.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates stores data relating to transactions, payments and orders for a
              period of up to seven years. This period may be extended under certain circumstances as
              part of our ongoing commitment to comply with UK and international law.
              We use carefully selected and recognised third-parties to help us take payment.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              We use carefully selected and recognised third-parties to help us take payments, provide
              commerce services and manage company accounts. Some of these third-parties may
              operate outside the European Union.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates may process your data based on more than one legal ground.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Circumstances under which we may be required to process your data under more than one
              legal ground may include:
            </p>

            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Reason

            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Data type

            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Customer registration

            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              To carry out a contract we’ve made with you

            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Processing and/or delivering your order

            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Identity, contact information, financial information, financial and transactional data

            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              To carry out a contract we’ve made with you and to exercise our legitimate interests to
              recover debts owed
            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              To manage our customer relationship with you
            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              Identity, contact information, marketing and communications preferences

            </li>
            <li className="text-[14px] font-sans px-[18px] my-[5px]">
              To carry out a contract we’ve made with you, to comply with legal obligations and to
              exercise our legitimate interests to keep our records updated.

            </li>


          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Marketing and communications
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates may send you marketing communications if you have given us
              your contact details and opted-in to marketing communications.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              You can opt-out of these marketing communications and manage your preferences at any
              time.
            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Our company obligations
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates may send you marketing communications if you have given us
              your contact details and opted-in to marketing communications.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              As a data controller, Merlin, Hunter & Associates is legally responsible for the data you
              provide us with. In honouring that responsibility, we pledge to uphold our commitments under
              GDPR and the Data Protection Act 2018.

            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              We will only ever use your data:
            </p>

            <li>In ways that are both fair and legal</li>
            <li>As described within this policy</li>
            <li>In ways that are necessary for the purposes described</li>


            <p className="text-[14px] font-sans px-[18px] my-[5px]">In addition, Merlin, Hunter & Associates processes the personal data you submit to us or we
              collect as a data processor. As part of this role, Merlin, Hunter & Associates takes all
              necessary precautions to secure the personal data we collect, process and store.</p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">We may occasionally use the data you provide us with for marketing, relationship
              management or account management activities. These activities are designed to ensure you
              have adequate information about other products and/or services we offer, that we have
              reason to believe you may be interested in. You have the right to opt-out of these activities at
              any time.

            </p>
          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Third-Parties
              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates never shares your personal data with third-parties unless those
              parties have been explicitly mentioned within our privacy statement.

            </p>

          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Our security

              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              As part of our ongoing commitment to GDPR, Merlin, Hunter & Associates will report any
              security breaches or attempted breaches to the relevant authorities within 24 hours. We will
              subsequently contact all those affected by the breach within 72 hours of its occurrence.
            </p>

          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Legitimate interests

              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              As part of the Data Protection Act 2018, Merlin, Hunter & Associates observes the right to
              share selected information with third-parties that use data for non-marketing purposes. This
              could include (but is not limited to) organisations that provide credit assessments,
              identification services and fraud prevention activities.

            </p>

          </div>
          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Contact us

              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates is committed to upholding your rights. If you have any
              questions, comments or concerns about this privacy policy or wish to exercise your rights in
              relation to your personal data, please contact James Aguilan at Merlin, Hunter & Associates

            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">We will process any request within 20 days. Subject Access Requests are normally
              performed free of charge, but we may need to charge individuals for excessive or
              unreasonable datarequests.</p>

          </div>

          <div className="my-[5px]">
            <div className="flex flex-row">
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[14px]">&nbsp;</h3>
              <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">Data Protection Notice

              </h3>
            </div>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              Merlin, Hunter & Associates collects, processes and stores the information and personal
              data you submit to our website in relation to marketing. All processing activities shall be
              carried out in accordance with your individual rights as defined by the European Union’s
              General Data Protection Regulation.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">Please note that by submitting information about yourself through our website, you are
              agreeing for Merlin, Hunter & Associates to process and store that data. This data shall be
              stored only for the duration of the previously outlined purpose for collection. We never store
              or process your data longer than we need to, and we do not use your data for any purpose
              other than those you have agreed to.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              The data you submit to our website will never be shared with or transferred to a third-party
              organisation. The following partners are exempt from this policy as they assist Merlin, Hunter
              & Associates in processing your personal data and delivering its services.
            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              You reserve the right to request Merlin, Hunter & Associates update your personal data at
              any time. You can also request information about your personal data, withdraw your consent
              for us to process your information or request a transfer or deletion of your data.

            </p>
            <p className="text-[14px] font-sans px-[18px] my-[5px]">
              For more information about Merlin, Hunter & Associates and how we protect and secure
              your data, consult our Privacy Policy

            </p>

          </div>



          {/* {PolicyData[0].policyList.map((item, index) => (
            <div className="my-[5px]" key={index}>
              <div className=" flex flex-row">
                <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[5px]">{index + 1}.</h3>
                <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">{item.heading}</h3>
              </div>
              <p className="text-[14px] font-sans px-[18px] my-[5px]">
                {item.para}
              </p>
            </div>
          ))} */}

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicys;
