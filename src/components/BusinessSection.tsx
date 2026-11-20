import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { B2B_SERVICES, IMAGES } from '../data/mocHoaData';
import { SafeImage } from './SafeImage';
import { submitOrderToSheet } from '../utils/sheetOrders';

export const BusinessSection: React.FC = () => {
  const [orgName, setOrgName] = useState('');
  const [partnerType, setPartnerType] = useState('Quà tặng sự kiện');
  const [quantity, setQuantity] = useState('30 – 50 phần quà');
  const [contactEmail, setContactEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [syncedAt, setSyncedAt] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim() || !contactEmail.trim()) {
      setErrorMsg('Vui lòng nhập tên tổ chức/đơn vị và email hoặc số điện thoại liên hệ.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);
    const code = `B2B-${Math.floor(1000 + Math.random() * 9000)}`;
    const details = `Nhu cầu: ${partnerType} | Số lượng dự kiến: ${quantity}${
      notes.trim() ? ` | Ý tưởng: ${notes.trim()}` : ''
    }`;

    try {
      const res = await submitOrderToSheet({
        orderCode: code,
        type: 'Khách hàng doanh nghiệp',
        customerName: orgName.trim(),
        contact: contactEmail.trim(),
        address: '',
        details,
        total: 'Báo giá hợp tác',
      });
      setSubmitted(true);
      setSyncedAt(res.syncedAt ?? new Date().toISOString());
    } catch {
      setErrorMsg('Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau ít phút.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="business" className="bg-[#FAF5EC] border-b border-[#D8C9B7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-16">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              05. Khách hàng doanh nghiệp · Mộc hoa for Business
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24] mb-4">
              Những món quà nhỏ, kết nối những hành trình lớn.
            </h2>
            <div className="space-y-4 text-[15.5px] leading-relaxed text-[#4A352A]">
              <p>
                Mộc hoa đồng hành cùng các tổ chức, câu lạc bộ, đơn vị tổ chức sự kiện và đối tác
                bán lẻ trong việc tạo nên những món quà thủ công mang dấu ấn riêng.
              </p>
              <p>
                Từ thiệp hoa kẹp dành tặng diễn giả, quà lưu niệm cho người tham dự workshop đến
                những bộ quà tặng dành riêng cho sự kiện, chúng mình mong muốn mỗi sản phẩm đều góp
                phần tạo nên một trải nghiệm đáng nhớ.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] lg:h-full rounded-2xl overflow-hidden border border-[#D8C9B7]">
              <SafeImage
                src={IMAGES.b2bJournal}
                alt="Bộ thiệp hoa kẹp thủ công chuẩn bị cho sự kiện và workshop doanh nghiệp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 B2B Services */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-[#3F2E24] mb-6">
            Dịch vụ hợp tác
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {B2B_SERVICES.map((service) => (
              <div
                key={service.number}
                className="p-6 bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl"
              >
                <p className="text-xs font-medium text-[#A77B5B] tabular-nums mb-1.5">
                  {service.number}
                </p>
                <h4 className="font-serif text-lg font-semibold text-[#3F2E24] mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-[#4A352A] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA + Inquiry Form */}
        <div className="bg-[#F4EBDD] border border-[#D8C9B7] rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              Hợp tác &amp; Đặt hàng số lượng lớn
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24] mb-4">
              Cùng nhau tạo nên những điều đáng nhớ.
            </h3>
            <p className="text-[15px] text-[#4A352A] leading-relaxed mb-4">
              Bạn đang tìm kiếm một món quà thủ công cho sự kiện hoặc muốn trở thành đối tác của
              Mộc hoa? Hãy chia sẻ ý tưởng và nhu cầu của bạn với chúng mình.
            </p>
            <ul className="space-y-2 text-sm text-[#735748]">
              <li>• Tư vấn mẫu thiết kế phù hợp ngân sách câu lạc bộ, trường học &amp; doanh nghiệp.</li>
              <li>• Hỗ trợ gắn thẻ tên sự kiện, logo đối tác trên bao bì giấy Kraft.</li>
              <li>• Thời gian hoàn thiện minh bạch và đóng gói chỉn chu theo lô.</li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-6 bg-[#FAF5EC] border border-[#A6AD91] rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#3F2E24]">
                  <CheckCircle2 className="w-5 h-5 text-[#735748]" />
                  <h4 className="font-serif text-xl font-semibold">
                    Đã tiếp nhận yêu cầu hợp tác từ {orgName}
                  </h4>
                </div>
                <p className="text-sm text-[#4A352A] leading-relaxed">
                  Cảm ơn bạn đã quan tâm đến dịch vụ <strong>{partnerType}</strong> ({quantity}).
                  Đội ngũ Mộc hoa sẽ gửi báo giá và mẫu đề xuất qua <strong>{contactEmail}</strong>{' '}
                  trong vòng 24 giờ làm việc.
                </p>
                {syncedAt && (
                  <p className="text-xs text-[#735748] tabular-nums">
                    Ghi nhận lúc{' '}
                    {new Date(syncedAt).toLocaleTimeString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSyncedAt(null);
                    setOrgName('');
                    setNotes('');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors cursor-pointer"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="b2b-org"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Tên tổ chức / CLB / Doanh nghiệp
                    </label>
                    <input
                      id="b2b-org"
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="Ví dụ: CLB Truyền thông / Tiệm sách An"
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] placeholder:text-[#735748]/60 focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="b2b-contact"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Email hoặc Số điện thoại
                    </label>
                    <input
                      id="b2b-contact"
                      type="text"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="email@tochuc.vn hoặc SĐT"
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] placeholder:text-[#735748]/60 focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="b2b-type"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Nhu cầu hợp tác
                    </label>
                    <select
                      id="b2b-type"
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    >
                      {B2B_SERVICES.map((s) => (
                        <option key={s.number} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="b2b-qty"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Số lượng dự kiến
                    </label>
                    <input
                      id="b2b-qty"
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="b2b-notes"
                    className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                  >
                    Ý tưởng &amp; thời gian dự kiến
                  </label>
                  <textarea
                    id="b2b-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Chia sẻ dịp tặng quà, tông màu sự kiện hoặc yêu cầu đóng gói..."
                    className="w-full rounded-lg border border-[#D8C9B7] bg-[#FAF5EC] px-3 py-2.5 text-sm text-[#3F2E24] placeholder:text-[#735748]/60 focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-medium text-[#735748] bg-[#E7C5C0]/40 border border-[#E7C5C0] px-3 py-2 rounded-lg">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-sm font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] disabled:opacity-60 rounded-lg transition-colors cursor-pointer"
                >
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Liên hệ hợp tác'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
