import { useState } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import styles from '../styles/styles';
import { FiChevronDown, FiChevronsDown } from 'react-icons/fi';

const FAQPage = () => {
  return (
    <>
      <Header />
      <Faq />
      <Footer />
    </>
  );
};

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods.',
    },
    {
      id: 2,
      question: 'Is my personal information safe on your website?',
      answer:
        'Yes, we take the security and privacy of your personal information very seriously. We use industry-standard encryption and follow strict data protection protocols to ensure your data is safe.',
    },
    {
      id: 3,
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to many countries. Shipping options and rates may vary depending on your location.',
    },
    {
      id: 4,
      question: 'What is your return policy?',
      answer:
        'We have a hassle-free return policy. If you are not satisfied with your purchase, you can return it within [X] days for a full refund or exchange. Please check our Returns and Refunds page for more details.',
    },
    {
      id: 5,
      question: 'How can I track my order?',
      answer:
        "You can track your order by logging into your account and navigating to the 'Order History' section. There, you will find a list of your recent orders along with their corresponding tracking numbers. Click on the tracking number to view the real-time status and location of your package.",
    },
    {
      id: 6,
      question: 'What if my package is lost or damaged during shipping?',
      answer:
        'In the rare event that your package is lost or arrives damaged, please contact our customer support team immediately. We will work with the shipping carrier to resolve the issue and ensure you receive a replacement or refund.',
    },
    {
      id: 7,
      question: 'Are there any discounts or promotions available?',
      answer:
        'Yes, we frequently offer discounts, promotions, and special deals. Make sure to subscribe to our newsletter and follow our social media channels to stay updated on the latest offers.',
    },
    {
      id: 8,
      question: 'How can I contact customer support?',
      answer:
        'You can reach our customer support team via email, phone, or live chat during our business hours. We are here to assist you with any questions or concerns you may have.',
    },
    {
      id: 9,
      question: 'Do you have a loyalty program or rewards system?',
      answer:
        'Yes, we have a loyalty program that rewards our frequent customers with exclusive benefits, discounts, and early access to new products.',
    },
    {
      id: 10,
      question: "Can I cancel or modify my order after it's placed?",
      answer:
        "We process orders quickly, but if you need to cancel or modify your order, please contact us as soon as possible. We'll do our best to accommodate your request before the shipment is processed.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <section className={styles.section}>
      <div className="w-full sm:w-5/6 lg:w-3/6 mx-auto">
        <p className="text-2xl font-semibold border-b-2 border-pri w-fit pb-1">
          FAQ
        </p>
        <div className="flex flex-col gap-4 mt-8 mb-20">
          {/* single faq */}
          {faqs.map((que) => (
            <div key={que.id} className="bg-gray-100 p-4">
              <div
                onClick={() => toggleTab(que.id)}
                className="flex cursor-pointer  items-center justify-between"
              >
                <p className="text-sm font-semibold">Q: "{que.question}"</p>
                <span
                  className={activeTab === que.id ? 'rotate-180' : 'rotate-0'}
                >
                  <FiChevronDown size={20} />
                </span>
              </div>
              <div
                className={`${
                  activeTab === que.id
                    ? 'border-t-2 border-pri py-3 mt-3'
                    : 'h-0'
                } text-sm transition-all duration-200 ease-in-out overflow-hidden `}
              >
                <p>{que.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQPage;
