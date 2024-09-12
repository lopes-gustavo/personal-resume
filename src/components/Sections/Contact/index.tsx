import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

import { contact, SectionId } from '../../../data/data';
import { ContactType, ContactValue } from '../../../data/dataDef';
import { Section } from '../../Layout/Section';
import { ContactForm } from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: 'Email' },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: 'Phone' },
};

// TODO: Enable this once email is working
const displayContactForm = false;

export default function Contact() {
  const { headerText, description, items } = contact;

  return (
    <Section sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {displayContactForm && (
            <div className="order-2 col-span-1 md:order-1 ">
              <ContactForm />
            </div>
          )}

          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <p className="prose leading-6 text-neutral-300">{description}</p>
            <dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2">
              {items.map(({ type, text, href }) => {
                const { Icon, srLabel } = ContactValueMap[type];

                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center">
                      <a
                        className="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        href={href}
                        target="_blank"
                      >
                        <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                        <span className="ml-3 text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
