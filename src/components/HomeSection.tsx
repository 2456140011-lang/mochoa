import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  IMAGES,
  SIGNATURE_PILLARS,
  WHY_MOC_HOA,
} from '../data/mocHoaData';
import { SafeImage } from './SafeImage';
import { BrandMark } from './BrandMark';

interface HomeSectionProps {
  onSelectCollectionFilter: (filter: 'all' | 'clip-card' | 'chenille-flower' | 'combo-moc-yi') => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectCollectionFilter }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home">
      {/* SECTION 01 · HERO BANNER */}
      <section className="bg-[#F4EBDD] border-b border-[#D8C9B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#735748] mb-4">
                <span>Mộc hoa</span>
                <span aria-hidden="true">·</span>
                <span>Craft &amp; Notes</span>
                <span aria-hidden="true">·</span>
                <span>Creative Handmade Gift Brand</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] tracking-tight text-[#3F2E24] mb-5">
                Gói dịu dàng gửi yêu thương.
              </h1>

              <div className="space-y-4 text-[15.5px] sm:text-base leading-[1.7] text-[#4A352A] max-w-xl mb-6">
                <p>
                  Có những điều chẳng cần nói thành lời. Một nhành hoa nhỏ, một tấm thiệp viết tay
                  hay một món quà được chuẩn bị bằng cả sự chân thành cũng đủ thay bạn gửi đi ngàn
                  lời thương.
                </p>
                <p>
                  Tại Mộc hoa, chúng mình kết hợp nghệ thuật thủ công với những ý tưởng sáng tạo để
                  tạo nên những món quà mang dấu ấn riêng. Từ đôi tay tỉ mỉ đến từng nét chữ chân
                  phương, mỗi sản phẩm đều được chăm chút để trở thành một kỷ niệm đáng giữ gìn.
                </p>
              </div>

              <p className="font-serif italic text-lg text-[#735748] mb-8">
                Chạm nét mộc, ủ hương hoa, gửi ngàn lời thương.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo('shop')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Khám phá sản phẩm</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('personalization')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#3F2E24] bg-transparent border border-[#735748] hover:bg-[#D8C9B7]/40 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Tạo món quà của bạn</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[320px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-[#D8C9B7] bg-[#D8C9B7]/30">
                <SafeImage
                  src={IMAGES.hero}
                  alt="Bó hoa tulip kẽm nhung thủ công và thiệp giấy Kraft Mộc hoa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 · BRAND INTRODUCTION */}
      <section className="bg-[#FAF5EC] border-b border-[#D8C9B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#D8C9B7]">
                <SafeImage
                  src={IMAGES.brandIntro}
                  alt="Thiệp giấy Kraft kèm hoa cúc họa mi kẽm nhung và thư viết tay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-3">
                02. Giới thiệu thương hiệu
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24] mb-6 leading-tight">
                Một đóa hoa, ngàn lời thương.
              </h2>

              <div className="space-y-4 text-[15.5px] leading-[1.75] text-[#4A352A] max-w-2xl mb-8">
                <p>
                  Mộc hoa tin rằng giá trị của một món quà không nằm ở sự cầu kỳ hay đắt đỏ, mà ở
                  tình cảm được gửi gắm bên trong.
                </p>
                <p>
                  Chúng mình lựa chọn những chất liệu gần gũi, kết hợp cùng đôi tay khéo léo để tạo
                  nên những nhành hoa bền đẹp và những tấm thiệp mang dấu ấn cá nhân.
                </p>
                <p>
                  Mỗi sản phẩm là một cách thể hiện yêu thương. Mỗi chi tiết là một chút chăm chút.
                  Và mỗi món quà là một câu chuyện riêng được trao đi.
                </p>
                <p className="font-medium text-[#735748]">
                  Mộc hoa – nơi nét mộc gặp gỡ hương hoa, nơi những điều chân thành được gói ghém
                  thành món quà.
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#3F2E24] border border-[#A77B5B] hover:bg-[#A77B5B] hover:text-[#F4EBDD] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Tìm hiểu về Mộc hoa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 · SIGNATURE COLLECTION */}
      <section className="bg-[#F4EBDD] border-b border-[#D8C9B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
                03. Bộ sưu tập đặc trưng
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24]">
                Những món quà mang dấu ấn Mộc hoa
              </h2>
            </div>
            <p className="text-sm text-[#735748] max-w-md leading-relaxed">
              Chọn một món quà, gửi một câu chuyện. Dù bạn muốn trao một lời chúc, lưu giữ một kỷ
              niệm hay tạo bất ngờ cho người thương, Mộc hoa luôn có những lựa chọn phù hợp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGNATURE_PILLARS.map((item) => (
              <button
                key={item.number}
                type="button"
                onClick={() => {
                  onSelectCollectionFilter(item.filterKey);
                  scrollTo('shop');
                }}
                className="group text-left bg-[#FAF5EC] border border-[#D8C9B7] rounded-xl overflow-hidden transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#D8C9B7]/30">
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#A77B5B] tabular-nums mb-1">
                      {item.number}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-[#3F2E24] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#735748] leading-relaxed">{item.subtitle}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#735748] group-hover:text-[#3F2E24] transition-colors">
                    <span>Xem dòng sản phẩm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                onSelectCollectionFilter('all');
                scrollTo('shop');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F4EBDD] bg-[#A77B5B] hover:bg-[#735748] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Khám phá bộ sưu tập</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 04 · WHY MỘC HOA */}
      <section className="bg-[#FAF5EC] border-b border-[#D8C9B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              04. Giá trị khác biệt
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24]">
              Điều làm nên một món quà Mộc hoa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_MOC_HOA.map((reason, idx) => (
              <div
                key={reason.title}
                className="p-6 sm:p-8 bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl"
              >
                <p className="text-xs font-medium text-[#A77B5B] tabular-nums mb-2">
                  0{idx + 1}.
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#3F2E24] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4A352A]">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 · BRAND STATEMENT */}
      <section className="bg-[#735748] text-[#F4EBDD]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-2xl bg-[#F4EBDD]">
              <BrandMark className="w-12 h-12" />
            </div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-tight tracking-wide text-[#F4EBDD] mb-6">
            Chạm nét mộc, ủ hương hoa, gửi ngàn lời thương.
          </h2>
          <p className="text-base sm:text-lg text-[#F4EBDD]/90 max-w-2xl mx-auto leading-relaxed">
            Một chút mộc mạc trong chất liệu. Một chút dịu dàng trong cách trao. Và thật nhiều yêu
            thương trong từng món quà.
          </p>
        </div>
      </section>
    </div>
  );
};
