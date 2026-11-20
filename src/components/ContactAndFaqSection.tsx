import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, IMAGES } from '../data/mocHoaData';
import { SafeImage } from './SafeImage';

export const ContactAndFaqSection: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ họ tên, thông tin liên hệ và nội dung lời nhắn.');
      return;
    }
    setErrorMsg('');
    setSent(true);
  };

  return (
    <div id="contact" className="bg-[#FAF5EC]">
      {/* 07. CONTACT – LIÊN HỆ */}
      <section className="border-b border-[#D8C9B7] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
                  07. Contact · Let&apos;s Connect
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24] mb-3">
                  Mộc hoa luôn sẵn sàng lắng nghe câu chuyện của bạn.
                </h2>
                <p className="text-[15.5px] leading-relaxed text-[#4A352A]">
                  Bạn muốn đặt một món quà, cá nhân hóa sản phẩm hay tìm kiếm cơ hội hợp tác cùng
                  Mộc hoa? Đừng ngần ngại gửi lời chào. Chúng mình rất vui khi được đồng hành cùng
                  bạn trong những khoảnh khắc đặc biệt.
                </p>
              </div>

              <div className="bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl p-6 space-y-3 text-sm">
                <h3 className="font-serif text-lg font-semibold text-[#3F2E24] mb-2">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-2 text-[#4A352A]">
                  <p>
                    <span className="font-semibold text-[#735748]">Tên thương hiệu:</span> Mộc hoa
                  </p>
                  <p>
                    <span className="font-semibold text-[#735748]">Tên tiếng Anh:</span> Moc Hoa
                    Craft &amp; Notes
                  </p>
                  <p>
                    <span className="font-semibold text-[#735748]">Đơn vị chủ quản:</span> Công ty
                    TNHH Thủ công Mộc Hoa (dự kiến)
                  </p>
                  <p>
                    <span className="font-semibold text-[#735748]">Email:</span>{' '}
                    hello@mochoacraft.vn
                  </p>
                  <p>
                    <span className="font-semibold text-[#735748]">Hotline:</span> 0901 234 567
                  </p>
                </div>
                <p className="pt-3 border-t border-[#D8C9B7] font-serif italic text-[#735748]">
                  Gói dịu dàng gửi yêu thương.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="aspect-[16/9] max-h-[260px] w-full rounded-2xl overflow-hidden border border-[#D8C9B7]">
                <SafeImage
                  src={IMAGES.brandIntro}
                  alt="Thiệp hoa giấy Kraft và thư viết tay tại bàn làm việc Mộc hoa"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#F4EBDD] border border-[#D8C9B7] rounded-2xl p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold text-[#3F2E24] mb-4">
                  Gửi lời nhắn cho Mộc hoa
                </h3>

                {sent ? (
                  <div className="p-5 bg-[#FAF5EC] border border-[#A6AD91] rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-[#3F2E24]">
                      <CheckCircle2 className="w-5 h-5 text-[#735748]" />
                      <h4 className="font-serif text-lg font-semibold">
                        Cảm ơn {name} đã gửi lời chào!
                      </h4>
                    </div>
                    <p className="text-sm text-[#4A352A]">
                      Mộc hoa đã nhận được tin nhắn và sẽ phản hồi bạn qua{' '}
                      <strong>{contact}</strong> trong thời gian sớm nhất.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setMessage('');
                      }}
                      className="px-4 py-2 text-xs font-semibold text-[#F4EBDD] bg-[#735748] rounded-lg cursor-pointer"
                    >
                      Gửi thêm lời nhắn
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                        >
                          Họ và tên
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Tên của bạn"
                          className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-info"
                          className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                        >
                          Email hoặc Số điện thoại
                        </label>
                        <input
                          id="contact-info"
                          type="text"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="SĐT hoặc email liên hệ"
                          className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                      >
                        Nội dung bạn cần Mộc hoa tư vấn
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ví dụ: Tư vấn mẫu thiệp tặng 20/11, đặt bó hoa theo tông màu..."
                        className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-xs font-medium text-[#735748] bg-[#E7C5C0]/40 border border-[#E7C5C0] px-3 py-2 rounded-lg">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="px-6 py-2.5 text-sm font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors cursor-pointer"
                    >
                      Gửi lời nhắn
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FAQ – CÂU HỎI THƯỜNG GẶP */}
      <section id="faq" className="border-b border-[#D8C9B7] py-16 lg:py-24 bg-[#F4EBDD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              08. FAQ · Câu hỏi thường gặp
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24]">
              Những điều bạn có thể thắc mắc
            </h2>
          </div>

          <div className="divide-y divide-[#D8C9B7] border-t border-b border-[#D8C9B7]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="font-serif text-lg font-medium text-[#3F2E24] group-hover:text-[#735748] transition-colors">
                      <span className="text-xs font-sans font-semibold text-[#A77B5B] tabular-nums mr-3">
                        0{idx + 1}.
                      </span>
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#735748] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 pl-8 pr-6 text-[15px] leading-relaxed text-[#4A352A]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
