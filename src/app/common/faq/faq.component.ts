import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  @Input()
  title = 'FAQ';

  @Input()
  multi = false;

  @Input()
  displayMode = 'flat' as any; // or flat

  @Input()
  faqList = [
    {
      question: 'How Much Does A Website Cost?How Much For a Website?',
      answer:
        "Well, it depends. We follow a transparent pricing model, with rates being decided as per your requirements. We don't offer one-for-all services but business-specific solutions, so the prices can vary. If all you need is a small business functional website, the cost can range anywhere between $500 and $5,000, and more depending upon your requirements. So, get in touch with us to get a price quote now.",
    },
    {
      question: 'Do You Do Graphic Design,And Can You Make A Logo?',
      answer:
        "Of course. We are the best web design company in India with a team of expert graphic designers that provide your brand with a unique identity with a custom-made logo. We understand the personality of your brand and the preferences of your audience to craft a logo that helps you put out your message clearly. Besides, we offer unlimited revisions to ensure you walk away satisfied.",
    },
    {
      question:
        'Can You Help Me With Digital Marketing?',
      answer:
        "Yes, of course. Our android app development company in India also offers a full suite of digital solutions to help you generate more revenue online. We provide various services, including website development, SEO, content marketing, eCommerce, social media marketing, paid advertisement, and mobile development. Whatever your digital requirements are, we'll take care of them all."
    },
    {
      question: 'Do You Make Custom Applications?',
      answer: "Yes. If your business requires custom applications, we create innovative, intuitive, and user-friendly mobile & web applications using cutting-edge technologies. As a trustworthy custom application development company, we understand the relevance of mobile presence, and we make sure your business leverages the best of mobile platforms with customized mobile app development India. In addition, we create desktop solutions as well, such as web apps and enterprise solutions."
    },
    {
      question:
        "What Is A Blockchain?What's The Main Use Of It In WebApplications ?",
      answer:
        "Blockchain is a decentralized, distributed ledger that records the origin of digital assets. Blockchain as a service can be used in web application development to support the growth of a technology stack. We can use an open blockchain for your application to create a private network with the help of blockchain software."
    },
    {
      question: 'Why Do Business Need An Online Presence?',
      answer:
        "As an experienced Shopify web development company, we believe that an online presence allows you to gain credibility and build your brand, which is essential to attract and retain customers. It makes your business readily accessible and provides your customers with an easy way to interact with your company and find what you have to offer."
    },
    {
      question:
        "How Can You Help With ECommerce",
      answer:
        "We love helping eCommerce businesses. From developing a robust, scalable eCommerce website using industry-leading platforms like Shopify and Magento to facilitating powerful branding, marketing, and sales, we do it all. We build your brand across multiple channels, acquire new customers, and provide them with a personalized experience to convert them into loyal, recurring consumers."
    }
  ];
}
