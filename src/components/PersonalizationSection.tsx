import React, { useState } from 'react';
import { CheckCircle2, QrCode } from 'lucide-react';
import { PERSONALIZATION_OPTIONS } from '../data/mocHoaData';

const FLOWER_CHOICES = [
  { id: 'tulip', label: 'Hoa Tulip nhung' },
  { id: 'daisy', label: 'Cúc họa mi' },
  { id: 'sunflower', label: 'Hoa hướng dương' },
  { id: 'bellflower', label: 'Hoa chuông pastel' },
];

const COLOR_TONES = [
  { id: 'velvet-pink', label: 'Velvet Pink · Hồng nhung', hex: '#E7C5C0' },
  { id: 'cream', label: 'Cream · Trắng kem', hex: '#F4EBDD' },
  { id: 'sage', label: 'Sage Green · Xanh dịu', hex: '#A6AD91' },
  { id: 'kraft', label: 'Kraft Brown · Nâu ấm', hex: '#A77B5B' },
];

const GIFT_TYPES = [
  'Thiệp hoa kẹp đơn',
  'Thiệp hoa kẹp gập đôi',
  'Bó hoa kẽm nhung mini',
  'Combo Mộc Ý (Hoa + Thiệp viết tay)',
];

export const PersonalizationSection: React.FC = () => {
  const [flower, setFlower] = useState(FLOWER_CHOICES[0].label);
  const [tone, setTone] = useState(COLOR_TONES[0]);
  const [giftType, setGiftType] = useState(GIFT_TYPES[3]);
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState(
    'Chúc bạn một ngày thật dịu dàng và nhiều niềm vui nhỏ.'
  );
  const [includeQrAudio, setIncludeQrAudio] = useState(false);
  const [senderContact, setSenderContact] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderContact.trim() || !message.trim()) {
      setErrorMsg('Vui lòng nhập lời chúc và thông tin liên hệ (Email hoặc SĐT) để Mộc hoa phản hồi.');
      return;
    }
    setErrorMsg('');
    const code = `MH-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(code);
  };

  return (
    <section id="personalization" className="bg-[#F4EBDD] border-b border-[#D8C9B7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Customization Copy & 4 Options */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
                04. Cá nhân hóa món quà · Your Words, Our Little Touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24] mb-4">
                Một món quà mang câu chuyện của riêng bạn.
              </h2>
              <p className="text-[15.5px] leading-relaxed text-[#4A352A]">
                Mộc hoa tin rằng món quà ý nghĩa nhất là món quà khiến người nhận cảm thấy mình thật
                đặc biệt. Vì vậy, chúng mình mang đến những lựa chọn cá nhân hóa để bạn có thể tự
                tay tạo nên một món quà mang dấu ấn riêng.
              </p>
            </div>

            <div className="space-y-4">
              {PERSONALIZATION_OPTIONS.map((opt) => (
                <div
                  key={opt.number}
                  className="p-5 bg-[#FAF5EC] border border-[#D8C9B7] rounded-xl"
                >
                  <div className="flex items-baseline gap-2.5 mb-1.5">
                    <span className="text-xs font-medium text-[#A77B5B] tabular-nums">
                      {opt.number}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#3F2E24]">
                      {opt.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#4A352A] leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 bg-[#D8C9B7]/40 border border-[#D8C9B7] rounded-xl">
              <p className="font-serif text-lg font-semibold text-[#3F2E24] mb-1">
                Món quà của bạn bắt đầu từ một ý tưởng.
              </p>
              <p className="text-sm text-[#4A352A] leading-relaxed">
                Hãy kể cho Mộc hoa nghe bạn muốn gửi điều gì, chúng mình sẽ cùng bạn biến ý tưởng ấy
                thành một món quà thật xinh.
              </p>
            </div>
          </div>

          {/* Right Column: Live Kraft Card Preview + Order Request Form */}
          <div className="lg:col-span-7 bg-[#FAF5EC] border border-[#D8C9B7] rounded-2xl p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-[#3F2E24] mb-6">
              Thiết kế lời thương &amp; gửi yêu cầu cá nhân hóa
            </h3>

            {/* Live Kraft Card Preview */}
            <div className="mb-8 p-6 rounded-xl bg-[#A77B5B]/20 border border-[#A77B5B]/40">
              <div className="flex items-center justify-between text-xs text-[#735748] mb-3">
                <span>Bản xem trước thiệp Kraft thủ công</span>
                <span>
                  {flower} · {tone.label.split(' · ')[0]}
                </span>
              </div>

              <div className="bg-[#D8C9B7]/65 border border-[#A77B5B]/50 rounded-lg p-6 shadow-xs flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-24 h-28 rounded-lg border border-[#735748]/30 bg-[#F4EBDD] flex flex-col items-center justify-center p-2 shrink-0">
                  <div
                    className="w-10 h-10 rounded-full border border-[#735748]/40 mb-2"
                    style={{ backgroundColor: tone.hex }}
                  />
                  <div className="w-10 h-0.5 bg-[#735748]/40 mb-1" />
                  <span className="text-[10px] text-[#735748] text-center leading-tight">
                    Nơ dây cói
                  </span>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs text-[#735748] mb-1">
                    {recipientName.trim() ? `Gửi ${recipientName.trim()},` : 'Gửi người thương,'}
                  </p>
                  <p
                    className="text-2xl leading-snug text-[#3F2E24] mb-3"
                    style={{ fontFamily: 'var(--font-handwriting)' }}
                  >
                    {message.trim() || 'Lời chúc viết tay của bạn sẽ hiển thị tại đây...'}
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-[#735748]">
                    <span>{giftType}</span>
                    {includeQrAudio && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1 font-medium text-[#3F2E24]">
                          <QrCode className="w-3.5 h-3.5" />
                          Kèm mã QR lời chúc âm thanh
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {submittedRef ? (
              <div className="p-6 bg-[#F4EBDD] border border-[#A6AD91] rounded-xl space-y-3">
                <div className="flex items-center gap-2.5 text-[#3F2E24]">
                  <CheckCircle2 className="w-5 h-5 text-[#735748]" />
                  <h4 className="font-serif text-xl font-semibold">
                    Đã ghi nhận yêu cầu cá nhân hóa ({submittedRef})
                  </h4>
                </div>
                <p className="text-sm text-[#4A352A] leading-relaxed">
                  Mộc hoa đã lưu lựa chọn <strong>{giftType}</strong> ({flower}, tông{' '}
                  {tone.label}) cùng lời chúc riêng của bạn. Đội ngũ sẽ liên hệ qua{' '}
                  <strong>{senderContact}</strong> trong thời gian sớm nhất để chốt mẫu và thời
                  gian giao hàng.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedRef(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors cursor-pointer"
                >
                  Tạo thêm một yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="custom-gift-type"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Kiểu quà tặng
                    </label>
                    <select
                      id="custom-gift-type"
                      value={giftType}
                      onChange={(e) => setGiftType(e.target.value)}
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    >
                      {GIFT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="custom-flower"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Chọn nhành hoa yêu thích
                    </label>
                    <select
                      id="custom-flower"
                      value={flower}
                      onChange={(e) => setFlower(e.target.value)}
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    >
                      {FLOWER_CHOICES.map((f) => (
                        <option key={f.id} value={f.label}>
                          {f.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-[#3F2E24] mb-2">
                    Bảng màu hoa &amp; giấy gói
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {COLOR_TONES.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTone(item)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium text-left transition-colors cursor-pointer ${
                          tone.id === item.id
                            ? 'border-[#735748] bg-[#F4EBDD] text-[#3F2E24]'
                            : 'border-[#D8C9B7] bg-transparent text-[#735748] hover:border-[#735748]'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-[#735748]/30 shrink-0"
                          style={{ backgroundColor: item.hex }}
                        />
                        <span className="truncate">{item.label.split(' · ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="recipient-name"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Tên người nhận
                    </label>
                    <input
                      id="recipient-name"
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Ví dụ: Minh Anh"
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2.5 text-sm text-[#3F2E24] placeholder:text-[#735748]/60 focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sender-contact"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Email hoặc SĐT liên hệ của bạn
                    </label>
                    <input
                      id="sender-contact"
                      type="text"
                      value={senderContact}
                      onChange={(e) => setSenderContact(e.target.value)}
                      placeholder="SĐT hoặc email để nhận ảnh duyệt mẫu"
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2.5 text-sm text-[#3F2E24] placeholder:text-[#735748]/60 focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="custom-note"
                    className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                  >
                    Lời thương muốn gửi gắm (viết tay trên thiệp)
                  </label>
                  <textarea
                    id="custom-note"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2.5 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                  />
                </div>

                <label className="flex items-center gap-2.5 text-sm text-[#3F2E24] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeQrAudio}
                    onChange={(e) => setIncludeQrAudio(e.target.checked)}
                    className="w-4 h-4 rounded border-[#735748] accent-[#735748]"
                  />
                  <span>Thêm dấu ấn đặc biệt: Viết chữ nghệ thuật &amp; mã QR lời chúc âm thanh</span>
                </label>

                {errorMsg && (
                  <p className="text-xs font-medium text-[#735748] bg-[#E7C5C0]/40 border border-[#E7C5C0] px-3 py-2 rounded-lg">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors cursor-pointer"
                >
                  Gửi yêu cầu cá nhân hóa
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
