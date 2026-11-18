import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import {
  JOURNAL_ARTICLES,
  JOURNAL_CATEGORIES,
  JournalArticle,
} from '../data/mocHoaData';
import { SafeImage } from './SafeImage';

export const JournalSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'art-of-gifting' | 'handmade-corner' | 'words-feelings' | 'culture-inspiration'
  >('all');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const filteredArticles =
    selectedCategory === 'all'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.categoryKey === selectedCategory);

  return (
    <section id="journal" className="bg-[#F4EBDD] border-b border-[#D8C9B7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
            06. Mộc Journal · Góc cảm hứng
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24] mb-3">
            Một góc nhỏ dành cho những điều dịu dàng.
          </h2>
          <p className="text-[15.5px] text-[#4A352A] leading-relaxed">
            Không chỉ tạo nên những món quà, Mộc hoa còn muốn chia sẻ những câu chuyện, ý tưởng và
            cảm hứng xoay quanh nghệ thuật thủ công và văn hóa trao tặng. Tại đây, chúng mình cùng
            bạn khám phá:
          </p>
        </div>

        {/* 4 Journal Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {JOURNAL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? 'all' : cat.key)}
                className={`text-left p-5 rounded-xl border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#735748] text-[#F4EBDD] border-[#735748]'
                    : 'bg-[#FAF5EC] text-[#3F2E24] border-[#D8C9B7] hover:border-[#735748]'
                }`}
              >
                <h3 className="font-serif text-base font-semibold tracking-wide mb-2">
                  {cat.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isSelected ? 'text-[#F4EBDD]/90' : 'text-[#4A352A]'
                  }`}
                >
                  {cat.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Category Filter Reset Bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#735748] text-[#F4EBDD]'
                  : 'bg-[#D8C9B7]/40 text-[#735748] hover:text-[#3F2E24]'
              }`}
            >
              Tất cả bài viết
            </button>
            {JOURNAL_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#735748] text-[#F4EBDD]'
                    : 'bg-[#D8C9B7]/40 text-[#735748] hover:text-[#3F2E24]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-[#FAF5EC] border border-[#D8C9B7] rounded-xl overflow-hidden flex flex-col sm:flex-row"
            >
              <button
                type="button"
                onClick={() => setActiveArticle(article)}
                className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden cursor-pointer shrink-0"
              >
                <SafeImage
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover"
                />
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#735748] mb-2">
                    <span className="font-medium text-[#A77B5B]">{article.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#3F2E24] mb-2 leading-snug">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="text-left hover:text-[#735748] transition-colors cursor-pointer"
                    >
                      {article.title}
                    </button>
                  </h3>
                  <p className="text-sm text-[#4A352A] leading-relaxed mb-4">{article.excerpt}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#735748] hover:text-[#3F2E24] transition-colors cursor-pointer"
                >
                  <span>Đọc bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3F2E24]/50 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div className="bg-[#FAF5EC] border border-[#D8C9B7] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8C9B7]">
              <div className="flex items-center gap-2 text-xs text-[#735748]">
                <span className="font-semibold text-[#A77B5B]">{activeArticle.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Đóng bài viết"
                className="p-2 rounded-lg text-[#735748] hover:bg-[#D8C9B7]/40 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3
                id="article-modal-title"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24] mb-4 leading-snug"
              >
                {activeArticle.title}
              </h3>
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#D8C9B7] mb-6">
                <SafeImage
                  src={activeArticle.image}
                  alt={activeArticle.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 text-[15.5px] leading-[1.8] text-[#4A352A]">
                {activeArticle.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
