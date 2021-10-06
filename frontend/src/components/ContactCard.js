import React from "react";
import generateAvatar from "../utils/generateAvatar";
import Button from "./Button";

export default function ContactCard({ name, phone, index, contract, getContacts }) {
  const [copyMessage, setCopyMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText(phone);
    setCopyMessage(true);

    setTimeout(() => {
      setCopyMessage(false);
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contract.deleteContact({
        contactIndex: index,
      });
      await getContacts();
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div>
        <img src={generateAvatar(name)} alt="" class="card-avatar" />
      </div>
      <div class="card-content">
        <h4 class="contact-name">{name}</h4>

        <h5 class="contact-number">
          {phone}
          {copyMessage && <span> {phone} copied to clipboard </span>}
          <svg
            onClick={copyNumber}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 6.875V19.25H6.875V6.875H19.25ZM19.25 5.5H6.875C6.51033 5.5 6.16059 5.64487 5.90273 5.90273C5.64487 6.16059 5.5 6.51033 5.5 6.875V19.25C5.5 19.6147 5.64487 19.9644 5.90273 20.2223C6.16059 20.4801 6.51033 20.625 6.875 20.625H19.25C19.6147 20.625 19.9644 20.4801 20.2223 20.2223C20.4801 19.9644 20.625 19.6147 20.625 19.25V6.875C20.625 6.51033 20.4801 6.16059 20.2223 5.90273C19.9644 5.64487 19.6147 5.5 19.25 5.5V5.5Z"
              fill="#CCCCCC"
            />
            <path
              d="M2.75 12.375H1.375V2.75C1.375 2.38533 1.51987 2.03559 1.77773 1.77773C2.03559 1.51987 2.38533 1.375 2.75 1.375H12.375V2.75H2.75V12.375Z"
              fill="#CCCCCC"
            />
          </svg>
        </h5>
      </div>

      <form className="del-form" onSubmit={handleSubmit}>
        <Button loading={loading}>
          <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.4545 5.45455H28.6364C28.998 5.45455 29.3449 5.59822 29.6006 5.85395C29.8563 6.10968 30 6.45653 30 6.81818C30 7.17984 29.8563 7.52669 29.6006 7.78242C29.3449 8.03815 28.998 8.18182 28.6364 8.18182H27.1282L25.0773 26.6618C24.892 28.3297 24.0982 29.8706 22.8478 30.9897C21.5973 32.1088 19.9781 32.7275 18.3 32.7273H11.7C10.0219 32.7275 8.40268 32.1088 7.15225 30.9897C5.90181 29.8706 5.10799 28.3297 4.92273 26.6618L2.86909 8.18182H1.36364C1.00198 8.18182 0.655132 8.03815 0.3994 7.78242C0.143669 7.52669 0 7.17984 0 6.81818C0 6.45653 0.143669 6.10968 0.3994 5.85395C0.655132 5.59822 1.00198 5.45455 1.36364 5.45455H9.54545C9.54545 4.00791 10.1201 2.62053 11.1431 1.5976C12.166 0.574674 13.5534 0 15 0C16.4466 0 17.834 0.574674 18.8569 1.5976C19.8799 2.62053 20.4545 4.00791 20.4545 5.45455V5.45455ZM15 2.72727C14.2767 2.72727 13.583 3.01461 13.0715 3.52607C12.5601 4.03754 12.2727 4.73123 12.2727 5.45455H17.7273C17.7273 4.73123 17.4399 4.03754 16.9285 3.52607C16.417 3.01461 15.7233 2.72727 15 2.72727V2.72727ZM10.9091 13.6364V24.5455C10.9091 24.9071 11.0528 25.254 11.3085 25.5097C11.5642 25.7654 11.9111 25.9091 12.2727 25.9091C12.6344 25.9091 12.9812 25.7654 13.237 25.5097C13.4927 25.254 13.6364 24.9071 13.6364 24.5455V13.6364C13.6364 13.2747 13.4927 12.9279 13.237 12.6721C12.9812 12.4164 12.6344 12.2727 12.2727 12.2727C11.9111 12.2727 11.5642 12.4164 11.3085 12.6721C11.0528 12.9279 10.9091 13.2747 10.9091 13.6364ZM17.7273 12.2727C17.3656 12.2727 17.0188 12.4164 16.763 12.6721C16.5073 12.9279 16.3636 13.2747 16.3636 13.6364V24.5455C16.3636 24.9071 16.5073 25.254 16.763 25.5097C17.0188 25.7654 17.3656 25.9091 17.7273 25.9091C18.0889 25.9091 18.4358 25.7654 18.6915 25.5097C18.9472 25.254 19.0909 24.9071 19.0909 24.5455V13.6364C19.0909 13.2747 18.9472 12.9279 18.6915 12.6721C18.4358 12.4164 18.0889 12.2727 17.7273 12.2727Z"
              fill="#F24E1E"
            />
          </svg>
        </Button>
      </form>
    </div>
  );
}
