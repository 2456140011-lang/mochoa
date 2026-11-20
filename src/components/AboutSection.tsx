import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  BRAND_FOUNDATION_TABLE,
  BRAND_IDENTITY_SPECS,
  BRAND_NAME_MEANING,
  BRAND_PALETTE,
  CORE_VALUES,
  IMAGES,
  VISION_AND_MISSION,
} from '../data/mocHoaData';
import { SafeImage } from './SafeImage';
import { BrandMark } from './BrandMark';

export const AboutSection: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <section id="about" className="bg-[#FAF5EC] border-b border-[#D8C9B7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. OUR STORY */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
                03. Về Mộc hoa · Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24] mb-3">
                Câu chuyện Mộc hoa
              </h2>
              <p className="font-serif italic text-lg text-[#735748]">
                Bắt đầu từ một nhành hoa và một lời thương.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-[15.5px] leading-[1.75] text-[#4A352A]">
              <p>
                Mộc hoa được hình thành từ mong muốn tạo nên những món quà thủ công gần gũi, có
                tính thẩm mỹ và mang theo câu chuyện riêng.
              </p>
              <p>
                Chúng mình nhận ra rằng, trong thời đại mà những lời chúc có thể được gửi đi chỉ
                bằng một cú chạm màn hình, một tấm thiệp viết tay hay một món quà được chuẩn bị
                bằng đôi tay vẫn có sức hấp dẫn rất riêng. Đó là cảm giác được chạm vào chất liệu
                giấy, nhìn thấy nét chữ của người thương và nhận ra rằng ai đó đã dành thời gian để
                chuẩn bị một điều đặc biệt cho mình.
              </p>
              <p>
                Từ ý tưởng ấy, Mộc hoa lựa chọn kết hợp hoa kẽm nhung với thiệp giấy thủ công.
                Những chất liệu tưởng chừng giản dị được kết hợp thành các sản phẩm vừa trẻ trung,
                vừa mang nét mộc mạc và tinh tế.
              </p>
              <p>
                Chúng mình mong muốn đưa thói quen tặng thiệp viết tay trở nên gần gũi hơn với
                người trẻ, đồng thời tạo ra những lựa chọn quà tặng có mức giá dễ tiếp cận nhưng
                vẫn được chăm chút về hình thức và cảm xúc. Mộc hoa không chỉ muốn trao đi một bó
                hoa hay một tấm thiệp. Chúng mình muốn mỗi sản phẩm khi đến tay người nhận đều
                mang theo một điều đáng nhớ.
              </p>
              <p className="font-serif italic text-base font-medium text-[#735748]">
                Chạm nét mộc, ủ hương hoa, gửi ngàn lời thương.
              </p>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-[#D8C9B7]">
            <SafeImage
              src="/assets/aistudio/B_t___u_t__m_t_nh_nh_hoa_v__m_t_l_i_th__ng._d54796fc.png"
              alt="Nhân sự vận hành Công ty Mộc Hoa – Gói dịu dàng gửi yêu thương"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* 2. HỆ THỐNG NỀN TẢNG & Ý NGHĨA TÊN THƯƠNG HIỆU */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-8 border-t border-[#D8C9B7]">
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              Hệ thống nền tảng thương hiệu
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24] mb-6">
              Hồ sơ định vị Mộc hoa
            </h3>

            <div className="bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#D8C9B7] bg-[#D8C9B7]/35">
                    <th className="py-3 px-4 text-xs font-semibold text-[#3F2E24] w-2/5">
                      Hạng mục
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold text-[#3F2E24]">
                      Nội dung thống nhất
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8C9B7]/70 text-sm">
                  {BRAND_FOUNDATION_TABLE.map((row) => (
                    <tr key={row.item}>
                      <td className="py-3 px-4 font-medium text-[#735748] align-top">
                        {row.item}
                      </td>
                      <td className="py-3 px-4 text-[#3F2E24]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
                Ý nghĩa tên thương hiệu
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24]">
                Mộc hoa – Câu chuyện từ tên gọi
              </h3>
            </div>

            <div className="space-y-4">
              {BRAND_NAME_MEANING.map((item) => (
                <div
                  key={item.key}
                  className="p-6 bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl"
                >
                  <h4 className="font-serif text-lg font-semibold text-[#3F2E24] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#4A352A]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. ĐỊNH HƯỚNG NHẬN DIỆN LOGO & BẢNG MÀU NHẬN DIỆN */}
        <div className="pt-8 border-t border-[#D8C9B7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 bg-[#F4EBDD] border border-[#D8C9B7] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <BrandMark className="w-16 h-16 shrink-0" />
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#3F2E24]">Mộc hoa</p>
                  <p className="text-xs tracking-widest text-[#735748] uppercase">
                    Craft &amp; Notes
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#3F2E24] mb-4">
                Định hướng nhận diện logo
              </h3>
              <dl className="space-y-3 text-sm">
                {BRAND_IDENTITY_SPECS.map((spec) => (
                  <div key={spec.label} className="pt-2.5 border-t border-[#D8C9B7]/70">
                    <dt className="font-semibold text-[#735748] mb-0.5">{spec.label}</dt>
                    <dd className="text-[#3F2E24] leading-relaxed">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
                Bảng màu nhận diện
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24] mb-3">
                Sắc độ mộc mạc &amp; dịu dàng
              </h3>
              <p className="text-sm text-[#735748] mb-6 leading-relaxed">
                Sáu tông màu nguyên bản tạo nên bản sắc thị giác thống nhất trên bao bì giấy Kraft,
                cánh hoa kẽm nhung và thiệp viết tay. Nhấp vào từng màu để sao chép mã hex.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {BRAND_PALETTE.map((swatch) => {
                  const isCopied = copiedHex === swatch.hex;
                  return (
                    <button
                      key={swatch.hex}
                      type="button"
                      onClick={() => handleCopyHex(swatch.hex)}
                      className="text-left bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl overflow-hidden hover:border-[#735748] transition-colors cursor-pointer"
                    >
                      <div
                        className="h-20 w-full border-b border-[#D8C9B7]"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div className="p-3.5">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#3F2E24]">
                            {swatch.name}
                          </span>
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-[#735748]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-[#A77B5B]" />
                          )}
                        </div>
                        <p className="text-xs font-mono text-[#735748] tabular-nums mb-1">
                          {isCopied ? 'Đã sao chép' : swatch.hex}
                        </p>
                        <p className="text-xs text-[#4A352A] leading-snug">{swatch.role}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4. TẦM NHÌN & SỨ MỆNH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-[#D8C9B7]">
          <div className="lg:col-span-5 bg-[#735748] text-[#F4EBDD] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-full rounded-xl overflow-hidden border border-[#F4EBDD]/20 mb-6 bg-[#3F2E24]/30">
                <img
                  src="/assets/aistudio/Ph_t_s_ng_tr_n_de29e79d.png"
                  alt="Hình ảnh đại diện Mộc hoa"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-xs font-medium tracking-wider text-[#E7C5C0] mb-2">
                Tầm nhìn · Vision
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F4EBDD] mb-6">
                Góp phần làm mới văn hóa tặng quà
              </h3>
              <div className="space-y-4 text-[15px] leading-relaxed text-[#F4EBDD]/90">
                {VISION_AND_MISSION.vision.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <p className="mt-8 pt-6 border-t border-[#F4EBDD]/20 font-serif italic text-base text-[#E7C5C0]">
              Gói dịu dàng gửi yêu thương.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              Sứ mệnh · Mission
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24] mb-6">
              Bốn cam kết trong từng sản phẩm
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VISION_AND_MISSION.missions.map((m, idx) => (
                <div
                  key={m.title}
                  className="p-6 bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl"
                >
                  <p className="text-xs font-medium text-[#A77B5B] tabular-nums mb-1.5">
                    0{idx + 1}.
                  </p>
                  <h4 className="font-serif text-lg font-semibold text-[#3F2E24] mb-2">
                    {m.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#4A352A]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. GIÁ TRỊ CỐT LÕI – CORE VALUES */}
        <div className="pt-8 border-t border-[#D8C9B7]">
          <div className="mb-8">
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              Giá trị cốt lõi · Core Values
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24]">
              Năm giá trị định hình Mộc hoa
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SafeImage
                    src={val.image}
                    alt={val.name}
                    className={
                      val.number === '01.'
                        ? 'w-full h-full object-cover object-top'
                        : val.number === '03.'
                          ? 'w-full h-full object-cover object-[center_25%]'
                          : val.number === '02.' || val.number === '04.' || val.number === '05.'
                            ? 'w-full h-full object-cover object-[center_20%]'
                            : 'w-full h-full object-cover'
                    }
                  />
                </div>
                <div className="p-4 flex-1">
                  <p className="text-xs font-medium text-[#A77B5B] tabular-nums mb-1">
                    {val.number}
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#3F2E24] mb-2">
                    {val.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#4A352A]">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
