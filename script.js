/**
 * ==========================================================================
 * WEBSITE QUÀ TẶNG 20/10 - JAVASCRIPT THUẦN (VANILLA JAVASCRIPT)
 * Đã bỏ hiển thị thời gian và bỏ hiển thị số lượng ảnh theo yêu cầu.
 * Dễ dàng sửa tiêu đề (title) và nội dung (desc) cho từng bức ảnh.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. CẤU HÌNH NGÀY KỶ NIỆM BÊN NHAU
     ========================================================================== */
  const CONFIG = {
    // 📅 Ngày chính thức bên nhau: 11 Tháng 8 Năm 2025
    anniversaryDate: new Date('2025-08-11T00:00:00')
  };

  /* ==========================================================================
     2. DANH SÁCH 34 BỨC ẢNH & LỜI NHẮN NHỦ GIỮ GÌN TÌNH YÊU CHO CẢ HAI ĐỨA
     ========================================================================== */
  const MY_PHOTOS = [
    {
      file: "1792486894221_54101366353672999_1924780808704743249_8ce744f6b35a5acdb44658e83cf6d964.jpg",
      title: "1. Luôn Lắng Nghe Bằng Cả Trái Tim",
      desc: "Dù cuộc sống bận rộn đến đâu, chúng mình hãy luôn dành thời gian ngồi lại, lắng nghe những tâm tư và chia sẻ của nhau em nhé."
    },
    {
      file: "1792486893970_54101366353672999_1924780808704743249_07e0657b238daa7569175cf981359f60.jpg",
      title: "2. Đừng Bao Giờ Để Cơn Giận Qua Đêm",
      desc: "Có những lúc bất đồng, nhưng trước khi đi ngủ, chúng mình hãy ôm nhau thật chặt và làm hòa, không để giận hờn kéo dài."
    },
    {
      file: "1792486894426_54101366353672999_1924780808704743249_22f48ff736abf079c06f278b8e2a129f.jpg",
      title: "3. Trân Trọng Cả Những Điều Giản Dị",
      desc: "Tình yêu không cần quá xa hoa, chỉ cần một bữa ăn cùng nhau, một cái nắm tay dạo phố cũng đủ để sưởi ấm tâm hồn đôi ta."
    },
    {
      file: "1792486894576_54101366353672999_1924780808704743249_a21147c04844b12d68af975cf219e810.jpg",
      title: "4. Dành Sự Tin Tưởng Tuyệt Đối Cho Nhau",
      desc: "Niềm tin là chiếc cầu vững chắc nhất. Anh tin em và em tin anh, để dù đi đâu lòng vẫn luôn bình yên hướng về nhau."
    },
    {
      file: "1792486894736_54101366353672999_1924780808704743249_8618fe6e56b8cf7ae314ad2f5e85fc4a.jpg",
      title: "5. Lời Nói Chân Thành & Dịu Dàng",
      desc: "Những lúc mệt mỏi, hãy dành cho nhau lời nói ngọt ngào, động viên thay vì những lời trách móc làm tổn thương nhau."
    },
    {
      file: "1792486895138_54101366353672999_1924780808704743249_27a20d7c26afb04a13d7e56754b88482.jpg",
      title: "6. Biết Nói Lời 'Xin Lỗi' & 'Cảm Ơn'",
      desc: "Khi nhận ra mình sai, hãy mở lòng nhận lỗi; và đừng quên cảm ơn đối phương vì những hy sinh thầm lặng mỗi ngày."
    },
    {
      file: "1792486895288_54101366353672999_1924780808704743249_b26f74d46271d1995f46e8262f7b4b42.jpg",
      title: "7. Tôn Trọng Không Gian Riêng Của Nhau",
      desc: "Yêu nhau là đồng hành nhưng vẫn để cho nhau khoảng trời tự do để theo đuổi đam mê và hoàn thiện chính mình."
    },
    {
      file: "1792486895691_54101366353672999_1924780808704743249_e916a907b697f87ccad7f28905dc41c9.jpg",
      title: "8. Không Ngừng Hẹn Hò & Làm Mới Tình Yêu",
      desc: "Dù bên nhau bao lâu, chúng mình vẫn sẽ có những buổi hẹn bất ngờ, những món quà nhỏ để cảm xúc luôn tươi mới như ngày đầu."
    },
    {
      file: "1792486895854_54101366353672999_1924780808704743249_856ef07b55a1be0d8c252e6f1548bfc1.jpg",
      title: "9. Thấu Hiểu Cả Những Khuyết Điểm",
      desc: "Không ai là hoàn hảo, yêu là học cách trân trọng những nét đáng yêu và kiên nhẫn sửa đổi cùng nhau."
    },
    {
      file: "1792486896117_54101366353672999_1924780808704743249_708e78d478063e832390571a7a373dc1.jpg",
      title: "10. Cùng Nhau San Sẻ Mọi Niềm Vui & Nỗi Buồn",
      desc: "Hạnh phúc nhân đôi khi cùng cười, và nỗi buồn vơi đi một nửa khi có người luôn kề vai gánh vác."
    },
    {
      file: "1792486896588_54101366353672999_1924780808704743249_bfeb2234af259d506d77d046aa3f86b5.jpg",
      title: "11. Cho Nhau Cảm Giác An Toàn Tuyệt Đối",
      desc: "Để đối phương luôn cảm thấy mình là duy nhất, luôn yên lòng và tự hào về tình yêu chân thành của hai đứa."
    },
    {
      file: "1792486897155_54101366353672999_1924780808704743249_8700b1a0f90dce82c3d3207e009db883.jpg",
      title: "12. Nhớ Về Lý Do Bắt Đầu Khi Gặp Bế Tắc",
      desc: "Những lúc khó khăn muốn buông xuôi, hãy cùng nhớ lại khoảnh khắc đầu tiên ta đã rung động và yêu nhau tha thiết nhường nào."
    },
    {
      file: "1792486897653_54101366353672999_1924780808704743249_921804087b168372bf75a1b1bc264c64.jpg",
      title: "13. Nụ Cười Của Em Là Ưu Tiên Hàng Đầu",
      desc: "Chỉ cần em vui và cảm thấy bình yên, mọi nỗ lực và cố gắng của anh trong cuộc sống đều trở nên xứng đáng."
    },
    {
      file: "1792486898161_54101366353672999_1924780808704743249_73af8355252779be120eb3459692800a.jpg",
      title: "14. Đặt Mình Vào Vị Trí Của Đối Phương",
      desc: "Trước khi tranh luận, hãy thử nghĩ xem người kia đang cảm thấy thế nào để bao dung và nhường nhịn nhau nhiều hơn."
    },
    {
      file: "1792486898644_54101366353672999_1924780808704743249_739cd8f9445af7bdc88722f29ffc2884.jpg",
      title: "15. Những Cái Ôm Tiếp Thêm Sức Mạnh",
      desc: "Sau một ngày dài mệt mỏi, chỉ cần một cái ôm thật sâu là mọi áp lực ngoài kia đều dừng lại trước cửa nhà."
    },
    {
      file: "1792486899231_54101366353672999_1924780808704743249_44b7194f61343cc32c112552ffc346ff.jpg",
      title: "16. Cùng Nhau Nấu Một Bữa Cơm Ấm Cúng",
      desc: "Căn bếp đỏ lửa và tiếng cười nói rộn ràng là sợi dây gắn kết hai trái tim bền chặt nhất qua năm tháng."
    },
    {
      file: "1792486899421_54101366353672999_1924780808704743249_0405d40d4885ad28be4bd95759b171b7.jpg",
      title: "17. Không So Sánh Với Bất Kỳ Ai",
      desc: "Mỗi chuyện tình đều có một vẻ đẹp riêng. Chúng mình hãy chỉ tập trung vun đắp cho hạnh phúc của riêng đôi ta."
    },
    {
      file: "1792486899681_54101366353672999_1924780808704743249_dcd08824b7b96776d9cb2fb3bb9adeea.jpg",
      title: "18. Sự Kiên Nhẫn Trong Mọi Hoàn Cảnh",
      desc: "Tình yêu đích thực cần thời gian để tôi luyện. Hãy luôn kiên nhẫn cùng nhau bước qua từng chặng đường thăng trầm."
    },
    {
      file: "1792486900870_54101366353672999_1924780808704743249_e46533f27c1a1f3386432ffb05a6884e.jpg",
      title: "19. Chăm Sóc Sức Khỏe Cho Nhau",
      desc: "Nhắc nhở nhau ăn uống đúng bữa, giữ ấm khi gió lạnh về. Khỏe mạnh để còn cùng nhau đi đến răng long đầu bạc."
    },
    {
      file: "1792486901478_54101366353672999_1924780808704743249_92396b7931ddfbe63c2ea28ff9b6f0d6.jpg",
      title: "20. Cùng Nhìn Về Một Hướng Tương Lai",
      desc: "Cùng phấn đấu vì một mái ấm tràn ngập tiếng cười, nơi có anh, có em và những ước mơ chung của hai đứa."
    },
    {
      file: "1792486902586_54101366353672999_1924780808704743249_8e2182f48e5dab0625426a3f96606238.jpg",
      title: "21. Luôn Nhớ Những Ngày Kỷ Niệm Quan Trọng",
      desc: "Ngày quen nhau 11/08, sinh nhật em, ngày lễ 20/10... Từng mốc thời gian đều là dấu son nhắc nhớ ta đã bên nhau quý giá thế nào."
    },
    {
      file: "1792486903164_54101366353672999_1924780808704743249_0632727236813e60d19d9695c8f581b2.jpg",
      title: "22. Giữ Lại Sự Tinh Tế & Quan Tâm Nhỏ Nhất",
      desc: "Một chiếc áo khoác khi trời trở gió, một cốc nước ấm khi mệt mỏi — sự quan tâm từ những điều nhỏ bé luôn đọng lại sâu nhất."
    },
    {
      file: "1792486903614_54101366353672999_1924780808704743249_c32d76102e8e7b3ff554fa272c3d5eda.jpg",
      title: "23. Chia Sẻ Thẳng Thắn, Không Giấu Kín",
      desc: "Có điều gì chưa hài lòng hãy nhẹ nhàng tâm sự để hiểu nhau hơn, đừng im lặng để sự hoài nghi có cơ hội lớn dần."
    },
    {
      file: "1792486903901_54101366353672999_1924780808704743249_de73071c326048786f751f836d0439ff.jpg",
      title: "24. Cùng Nhau Khám Phá Thế Giới",
      desc: "Đi đến những vùng đất mới, thưởng thức những món ăn ngon để trang nhật ký tình yêu ngày càng đong đầy trải nghiệm."
    },
    {
      file: "1792486904274_54101366353672999_1924780808704743249_e937dc5c934f792d6166683925a8ea3e.jpg",
      title: "25. Giữ Trọn Sự Chung Thủy Tuyệt Đối",
      desc: "Giữa muôn vạn cám dỗ ngoài kia, giữ trọn trái tim hướng về nhau là cách tôn trọng tình yêu và người mình đã chọn."
    },
    {
      file: "1792486904710_54101366353672999_1924780808704743249_85391c5e4c858376e8d45b99a7f40c40.jpg",
      title: "26. Biến Nhau Thành Nơi Bình Yên Nhất",
      desc: "Dù xã hội ngoài kia có xô bồ, khi trở về trong vòng tay nhau, mọi giông bão đều phải dừng lại sau lưng."
    },
    {
      file: "1792486904897_54101366353672999_1924780808704743249_5929674f00789ff2c0c9ad623795dc17.jpg",
      title: "27. Không Để Căng Thẳng Đè Nặng Lên Nhau",
      desc: "Những bực dọc bên ngoài hãy gác lại, khi nhìn vào mắt nhau chỉ còn lại sự dịu dàng và nâng niu."
    },
    {
      file: "1792486905182_54101366353672999_1924780808704743249_419573fbcc1ea7753baa8cb4ff712fa0.jpg",
      title: "28. Cùng Nhau Cười Thật Nhiều Mỗi Ngày",
      desc: "Một câu đùa đáng yêu, một cái nháy mắt vui vẻ sẽ xua tan mọi mệt mỏi và làm tình yêu của chúng mình luôn tràn đầy năng lượng."
    },
    {
      file: "1792486905510_54101366353672999_1924780808704743249_c314f565bef01737901475c77e8b0c6c.jpg",
      title: "29. Bao Dung & Không Nhắc Lại Chuyện Cũ",
      desc: "Khi đã thấu hiểu và tha thứ, hãy cùng nhau bước tiếp về phía trước, không đào bới lại những điều không vui trong quá khứ."
    },
    {
      file: "1792486905765_54101366353672999_1924780808704743249_c7d1a1342e6f3b63a5e42f3847429656.jpg",
      title: "30. Gửi Nhau Lời Chúc Yêu Thương Mỗi Sáng",
      desc: "Bắt đầu ngày mới bằng sự ấm áp để người kia luôn biết rằng mình là điều đầu tiên xuất hiện trong tâm trí đối phương."
    },
    {
      file: "1792486906138_54101366353672999_1924780808704743249_8d7aba9b5757aa4969a5aebb3fc17751.jpg",
      title: "31. Là Hậu Phương Vững Chắc Cho Nhau",
      desc: "Luôn tin tưởng, ủng hộ và là chỗ dựa vững chãi nhất để em tự tin theo đuổi mọi ước mơ trong cuộc sống."
    },
    {
      file: "1792486906636_54101366353672999_1924780808704743249_b6a80d3059d2d06f297e62a529130849.jpg",
      title: "32. Giữ Cho Bàn Tay Luôn Đan Chặt",
      desc: "Dù đi giữa phố xá đông người hay lúc khó khăn chông chênh, chỉ cần bàn tay này vẫn nằm trọn trong tay kia là đủ vững lòng."
    },
    {
      file: "1792486907175_54101366353672999_1924780808704743249_63463389aae3d02e384f96721433d85f.jpg",
      title: "33. Nhắc Nhở Nhau: Em Là Điều Quý Giá Nhất",
      desc: "Dù thời gian có trôi và cuộc sống có đổi thay, em vẫn luôn là món quà tuyệt vời nhất mà định mệnh đã ban tặng cho anh."
    },
    {
      file: "1792486907645_54101366353672999_1924780808704743249_d69306dad59d8d2fb25185dd9e54c072.jpg",
      title: "34. Lời Hứa Đồng Hành Đến Trọn Đời",
      desc: "Cùng nhau già đi, cùng nhau ngắm hoàng hôn mỗi ngày. Yêu em từ ngày đầu tiên cho đến mãi mãi về sau! ❤️"
    }
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     3. RENDER ALBUM POLAROID & THƯỚC PHIM 34 BỨC ẢNH
     ========================================================================== */
  const polaroidGrid = document.getElementById('polaroidGrid');
  const featuredPolaroid = document.getElementById('featuredPolaroid');
  const featuredPhotoImg = document.getElementById('featuredPhotoImg');
  const featuredPhotoTitle = document.getElementById('featuredPhotoTitle');
  const featuredPhotoDesc = document.getElementById('featuredPhotoDesc');
  const photoCounterPill = document.getElementById('photoCounterPill');
  const prevPhotoBtn = document.getElementById('prevPhotoBtn');
  const nextPhotoBtn = document.getElementById('nextPhotoBtn');
  const thumbnailStrip = document.getElementById('thumbnailStrip');
  const openAllGridBtn = document.getElementById('openAllGridBtn');
  const gridModal = document.getElementById('gridModal');
  const gridModalClose = document.getElementById('gridModalClose');
  const gridModalBackdrop = document.getElementById('gridModalBackdrop');

  let allGalleryPhotos = [];
  let currentLightboxIndex = 0;
  let currentFeaturedPhotoIndex = 0;
  let photoAutoSlideInterval = null;

  function updateFeaturedPhoto(index) {
    if (allGalleryPhotos.length === 0) return;
    currentFeaturedPhotoIndex = (index + allGalleryPhotos.length) % allGalleryPhotos.length;
    const photo = allGalleryPhotos[currentFeaturedPhotoIndex];

    if (featuredPhotoImg) {
      featuredPhotoImg.style.opacity = '0.3';
      featuredPhotoImg.src = photo.src;
      featuredPhotoImg.alt = photo.title;
      setTimeout(() => { featuredPhotoImg.style.opacity = '1'; }, 150);
    }

    if (featuredPhotoTitle) featuredPhotoTitle.textContent = photo.title;
    if (featuredPhotoDesc) featuredPhotoDesc.textContent = photo.desc;
    if (photoCounterPill) photoCounterPill.textContent = `${currentFeaturedPhotoIndex + 1} / ${allGalleryPhotos.length}`;

    if (thumbnailStrip) {
      const thumbs = thumbnailStrip.querySelectorAll('.mini-thumb');
      thumbs.forEach((t, i) => {
        if (i === currentFeaturedPhotoIndex) {
          t.classList.add('active');
          t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          t.classList.remove('active');
        }
      });
    }
  }

  function renderThumbnailStrip() {
    if (!thumbnailStrip) return;
    thumbnailStrip.innerHTML = '';
    allGalleryPhotos.forEach((photo, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `mini-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.title = photo.title;
      thumb.innerHTML = `<img src="${photo.src}" alt="${photo.title}" loading="lazy">`;
      thumb.addEventListener('click', () => {
        updateFeaturedPhoto(idx);
      });
      thumbnailStrip.appendChild(thumb);
    });
  }

  function startPhotoAutoSlide() {
    stopPhotoAutoSlide();
    if (prefersReducedMotion) return;
    photoAutoSlideInterval = setInterval(() => {
      updateFeaturedPhoto(currentFeaturedPhotoIndex + 1);
    }, 3200);
  }

  function stopPhotoAutoSlide() {
    if (photoAutoSlideInterval) {
      clearInterval(photoAutoSlideInterval);
      photoAutoSlideInterval = null;
    }
  }

  if (prevPhotoBtn) {
    prevPhotoBtn.addEventListener('click', () => {
      updateFeaturedPhoto(currentFeaturedPhotoIndex - 1);
    });
  }

  if (nextPhotoBtn) {
    nextPhotoBtn.addEventListener('click', () => {
      updateFeaturedPhoto(currentFeaturedPhotoIndex + 1);
    });
  }

  if (featuredPolaroid) {
    featuredPolaroid.addEventListener('click', () => {
      openLightbox(currentFeaturedPhotoIndex);
    });
    featuredPolaroid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(currentFeaturedPhotoIndex);
      }
    });
  }

  if (openAllGridBtn && gridModal) {
    openAllGridBtn.addEventListener('click', () => {
      gridModal.classList.add('active');
      gridModal.setAttribute('aria-hidden', 'false');
    });
  }

  if (gridModalClose && gridModal) {
    gridModalClose.addEventListener('click', () => {
      gridModal.classList.remove('active');
      gridModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (gridModalBackdrop && gridModal) {
    gridModalBackdrop.addEventListener('click', () => {
      gridModal.classList.remove('active');
      gridModal.setAttribute('aria-hidden', 'true');
    });
  }

  function initGallery() {
    allGalleryPhotos = MY_PHOTOS.map((item, idx) => ({
      id: `photo-${idx + 1}`,
      src: `images/${item.file}`,
      title: item.title,
      desc: item.desc
    }));

    renderPolaroidGrid();
    renderThumbnailStrip();
    updateFeaturedPhoto(0);
  }

  function renderPolaroidGrid() {
    if (!polaroidGrid) return;
    polaroidGrid.innerHTML = '';

    allGalleryPhotos.forEach((photo, index) => {
      const card = document.createElement('div');
      card.className = 'polaroid-card';
      card.dataset.index = index;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Xem ảnh: ${photo.title}`);

      card.innerHTML = `
        <div class="pin-tape"></div>
        <div class="polaroid-img-wrapper">
          <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        </div>
        <div class="polaroid-caption">
          <p class="caption-text">${photo.title}</p>
          <p class="caption-desc">${photo.desc}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        if (gridModal) gridModal.classList.remove('active');
        openLightbox(index);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (gridModal) gridModal.classList.remove('active');
          openLightbox(index);
        }
      });

      polaroidGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     4. LIGHTBOX MODAL: LƯỚT XEM ẢNH (NEXT / PREV SLIDER)
     ========================================================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  function openLightbox(index) {
    if (!lightboxModal || allGalleryPhotos.length === 0) return;
    currentLightboxIndex = (index + allGalleryPhotos.length) % allGalleryPhotos.length;
    updateLightboxContent();

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Tạm dừng tự động chuyển cảnh khi đang ngắm ảnh
    if (typeof pauseSceneAutoPlay === 'function') {
      pauseSceneAutoPlay();
    }
    if (typeof stopPhotoAutoSlide === 'function') {
      stopPhotoAutoSlide();
    }
  }

  function updateLightboxContent() {
    const photo = allGalleryPhotos[currentLightboxIndex];
    if (!photo) return;

    if (lightboxImg) {
      lightboxImg.style.opacity = '0.3';
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.title || "Ảnh kỷ niệm";
      setTimeout(() => {
        lightboxImg.style.opacity = '1';
      }, 150);
    }

    if (lightboxTitle) lightboxTitle.textContent = photo.title;
    if (lightboxDesc) lightboxDesc.textContent = photo.desc;
  }

  function nextLightboxPhoto() {
    if (allGalleryPhotos.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % allGalleryPhotos.length;
    updateLightboxContent();
  }

  function prevLightboxPhoto() {
    if (allGalleryPhotos.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + allGalleryPhotos.length) % allGalleryPhotos.length;
    updateLightboxContent();
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightboxPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightboxPhoto);

  // Phím mũi tên lướt ảnh (← / →), ESC để đóng
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'ArrowRight') nextLightboxPhoto();
    if (e.key === 'ArrowLeft') prevLightboxPhoto();
    if (e.key === 'Escape') closeLightbox();
  });

  // Vuốt màn hình cảm ứng trên điện thoại
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextLightboxPhoto();
      if (touchEndX > touchStartX + 50) prevLightboxPhoto();
    }, { passive: true });
  }

  /* ==========================================================================
     5. ĐỒNG HỒ ĐẾM NGÀY BÊN NHAU (LOVE DAYS COUNTER)
     ========================================================================== */
  const countDaysEl = document.getElementById('countDays');
  const countHoursEl = document.getElementById('countHours');
  const countMinutesEl = document.getElementById('countMinutes');
  const countSecondsEl = document.getElementById('countSeconds');

  function updateLoveCounter() {
    const now = new Date();
    let diff = now.getTime() - CONFIG.anniversaryDate.getTime();
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (countDaysEl) countDaysEl.textContent = days;
    if (countHoursEl) countHoursEl.textContent = String(hours).padStart(2, '0');
    if (countMinutesEl) countMinutesEl.textContent = String(minutes).padStart(2, '0');
    if (countSecondsEl) countSecondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);

  /* ==========================================================================
     6. BẬT / TẮT NHẠC NỀN & TỰ ĐỘNG PHÁT KHI VÀO WEB HOẶC CHẠM MÀN HÌNH
     ========================================================================== */
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicLabel = document.getElementById('musicLabel');
  const bgMusic = document.getElementById('bgMusic');

  let isPlayingMusic = false;

  function playMusic() {
    if (!bgMusic) return;
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlayingMusic = true;
        if (musicToggleBtn) musicToggleBtn.classList.add('playing');
        if (musicLabel) musicLabel.textContent = 'Tắt Nhạc';
      }).catch((err) => {
        // Trình duyệt chặn cho tới khi có tương tác đầu tiên
        console.log("Đang chờ tương tác để phát nhạc:", err);
      });
    }
  }

  function pauseMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
    isPlayingMusic = false;
    if (musicToggleBtn) musicToggleBtn.classList.remove('playing');
    if (musicLabel) musicLabel.textContent = 'Bật Nhạc';
  }

  // 1. Thử tự phát ngay khi trang vừa tải
  playMusic();

  // 2. Tự động phát ngay khi người dùng chạm hoặc bấm vào bất kỳ đâu trên trang web
  function startAudioOnFirstInteraction() {
    if (!isPlayingMusic) {
      playMusic();
    }
    ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
      document.removeEventListener(evt, startAudioOnFirstInteraction);
    });
  }

  ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
    document.addEventListener(evt, startAudioOnFirstInteraction, { once: true });
  });

  // 3. Nút bấm bật/tắt thủ công ở góc trên màn hình
  if (musicToggleBtn && bgMusic) {
    musicToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Tránh kích hoạt lại sự kiện toàn trang
      if (isPlayingMusic) {
        pauseMusic();
      } else {
        playMusic();
      }
    });

    // Khi bài hát hết thì tự động lặp lại
    bgMusic.addEventListener('ended', () => {
      bgMusic.currentTime = 0;
      playMusic();
    });
  }

  /* ==========================================================================
     7. HIỆU ỨNG TRÁI TIM & CÁNH HOA BAY NỀN
     ========================================================================== */
  const heartsContainer = document.getElementById('heartsContainer');

  if (heartsContainer && !prefersReducedMotion) {
    const heartSymbols = ['❤️', '💖', '🌸', '✨', '💕', '🌷', '🤍'];

    function createFloatingPetal() {
      if (document.hidden) return;

      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

      const leftPos = Math.random() * 97 + 1;
      heart.style.left = `${leftPos}vw`;

      const fontSize = Math.random() * 12 + 14;
      heart.style.fontSize = `${fontSize}px`;

      const duration = Math.random() * 6 + 6;
      heart.style.animationDuration = `${duration}s`;

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        if (heart.parentNode) heart.parentNode.removeChild(heart);
      }, duration * 1000);
    }

    const floatingInterval = setInterval(createFloatingPetal, 1200);
    window.addEventListener('beforeunload', () => clearInterval(floatingInterval));
  }

  /* ==========================================================================
     8. TƯƠNG TÁC MỞ PHONG THƯ TÌNH (LOVE LETTER)
     - Người dùng có thể chạm/click vào phong thư để mở ngay lập tức
     - HOẶC đợi 3 giây để phong thư tự động mở ra
     ========================================================================== */
  const envelope = document.getElementById('envelope');
  const letterSheet = document.getElementById('letterSheet');
  const envelopePrompt = document.getElementById('envelopePrompt');
  const envelopePromptText = document.getElementById('envelopePromptText');
  let isEnvelopeOpen = false;
  let envelopeAutoTimer = null;
  let envelopeCountdownInterval = null;

  function openEnvelope() {
    if (!envelope || !letterSheet) return;
    clearTimeout(envelopeAutoTimer);
    clearInterval(envelopeCountdownInterval);
    envelopeAutoTimer = null;
    envelopeCountdownInterval = null;

    isEnvelopeOpen = true;
    envelope.classList.add('open');
    letterSheet.classList.add('revealed');
    envelope.setAttribute('aria-expanded', 'true');

    setTimeout(() => {
      letterSheet.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 350);
  }

  function closeEnvelope() {
    if (!envelope || !letterSheet) return;
    clearTimeout(envelopeAutoTimer);
    clearInterval(envelopeCountdownInterval);
    envelopeAutoTimer = null;
    envelopeCountdownInterval = null;

    isEnvelopeOpen = false;
    envelope.classList.remove('open');
    letterSheet.classList.remove('revealed');
    envelope.setAttribute('aria-expanded', 'false');
  }

  function toggleEnvelope() {
    if (isEnvelopeOpen) {
      closeEnvelope();
    } else {
      openEnvelope();
    }
  }

  function startEnvelopeTimer() {
    clearTimeout(envelopeAutoTimer);
    clearInterval(envelopeCountdownInterval);

    if (isEnvelopeOpen) return;

    let secondsLeft = 3;
    const updateCountdownDisplay = (sec) => {
      const countEl = document.getElementById('envelopeTimerCount');
      if (countEl) {
        countEl.textContent = sec;
      } else if (envelopePromptText) {
        envelopePromptText.innerHTML = `Chạm để mở ngay (tự mở sau <strong id="envelopeTimerCount">${sec}</strong>s...) 💌`;
      }
    };

    updateCountdownDisplay(secondsLeft);

    envelopeCountdownInterval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft >= 0) {
        updateCountdownDisplay(secondsLeft);
      }
      if (secondsLeft <= 0) {
        clearInterval(envelopeCountdownInterval);
        envelopeCountdownInterval = null;
      }
    }, 1000);

    envelopeAutoTimer = setTimeout(() => {
      if (!isEnvelopeOpen && currentSceneIndex === 3) {
        openEnvelope();
      }
    }, 3000);
  }

  if (envelope) {
    envelope.addEventListener('click', () => {
      // Khi người dùng bấm/chạm vào phong thư: nếu chưa mở thì mở ngay tức thì
      if (!isEnvelopeOpen) {
        openEnvelope();
      } else {
        toggleEnvelope();
      }
    });

    envelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!isEnvelopeOpen) {
          openEnvelope();
        } else {
          toggleEnvelope();
        }
      }
    });
  }

  /* ==========================================================================
     9. LẬT THẺ LỜI NHẮN BÍ MẬT (SECRET CARDS)
     ========================================================================== */
  const secretCards = document.querySelectorAll('.secret-card');

  secretCards.forEach((card) => {
    function toggleCardFlip() {
      card.classList.toggle('flipped');
    }

    card.addEventListener('click', toggleCardFlip);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCardFlip();
      }
    });
  });

  /* ==========================================================================
     10. HIỆU ỨNG NÚT "GỬI NGÀN TRÁI TIM" (BURST PARTICLES)
     ========================================================================== */
  const heartBurstBtn = document.getElementById('heartBurstBtn');
  const heartCountNumber = document.getElementById('heartCountNumber');
  let heartCount = 0;

  function createBurstEffect(x, y) {
    if (prefersReducedMotion) return;

    const burstIcons = ['❤️', '💖', '💕', '💗', '💓', '✨', '🌸', '💐'];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('span');
      particle.className = 'burst-particle';
      particle.textContent = burstIcons[Math.floor(Math.random() * burstIcons.length)];

      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
      const velocity = Math.random() * 120 + 80;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 40;
      const rot = (Math.random() - 0.5) * 180;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.setProperty('--rot', `${rot}deg`);
      particle.style.fontSize = `${Math.random() * 14 + 18}px`;

      document.body.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
      }, 1200);
    }
  }

  if (heartBurstBtn) {
    heartBurstBtn.addEventListener('click', (e) => {
      heartCount += 10;
      if (heartCountNumber) {
        heartCountNumber.textContent = heartCount.toLocaleString('vi-VN');
      }

      const rect = heartBurstBtn.getBoundingClientRect();
      const clickX = e.clientX || rect.left + rect.width / 2;
      const clickY = e.clientY || rect.top + rect.height / 2;

      createBurstEffect(clickX, clickY);
    });
  }

  /* ==========================================================================
     11. NÚT CUỘN LÊN ĐẦU TRANG (BACK TO TOP)
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     12. MÀN HÌNH KHÓA QUÉT VÂN TAY (FINGERPRINT SCANNER LOCK SCREEN)
     ========================================================================== */
  const fingerprintLockScreen = document.getElementById('fingerprintLockScreen');
  const lockScanStep = document.getElementById('lockScanStep');
  const lockQuizBox = document.getElementById('lockQuizBox');
  const quizFeedback = document.getElementById('quizFeedback');
  const quizOptionBtns = document.querySelectorAll('.quiz-option-btn');
  const fingerprintPad = document.getElementById('fingerprintPad');
  const scannerProgressCircle = document.getElementById('scannerProgressCircle');
  const lockStatusText = document.getElementById('lockStatusText');
  const motionController = document.getElementById('motionController');
  const toggleMotionBtn = document.getElementById('toggleMotionBtn');
  const motionIcon = document.getElementById('motionIcon');
  const motionLabel = document.getElementById('motionLabel');

  const CIRCLE_CIRCUMFERENCE = 364.42; // 2 * PI * 58
  const HOLD_DURATION_MS = 1350; // Thời gian giữ ngón tay để quét (~1.35 giây)

  let isHoldingScan = false;
  let scanStartTime = 0;
  let scanAnimationId = null;
  let isFingerprintVerified = false;
  let isUnlocked = false;

  // Khóa cuộn trang khi màn hình vân tay đang hiển thị
  if (fingerprintLockScreen) {
    document.body.classList.add('locked');
    document.body.style.overflow = 'hidden';

    if (scannerProgressCircle) {
      scannerProgressCircle.style.strokeDasharray = `${CIRCLE_CIRCUMFERENCE}`;
      scannerProgressCircle.style.strokeDashoffset = `${CIRCLE_CIRCUMFERENCE}`;
    }
  }

  function startFingerprintScan(e) {
    if (isUnlocked || isHoldingScan) return;
    if (e && e.cancelable) e.preventDefault();

    isHoldingScan = true;
    scanStartTime = performance.now();

    if (fingerprintPad) fingerprintPad.classList.add('scanning');
    if (lockStatusText) {
      lockStatusText.classList.add('scanning');
      lockStatusText.classList.remove('success');
      lockStatusText.textContent = 'Đang nhận diện công chúa... 0%';
    }

    scanLoop(performance.now());
  }

  function scanLoop(now) {
    if (!isHoldingScan || isUnlocked) return;

    const elapsed = now - scanStartTime;
    const progress = Math.min(elapsed / HOLD_DURATION_MS, 1);
    const offset = CIRCLE_CIRCUMFERENCE * (1 - progress);

    if (scannerProgressCircle) {
      scannerProgressCircle.style.strokeDashoffset = offset;
    }

    const percent = Math.floor(progress * 100);
    if (lockStatusText) {
      lockStatusText.textContent = `Đang nhận diện công chúa... ${percent}%`;
    }

    if (progress < 1) {
      scanAnimationId = requestAnimationFrame(scanLoop);
    } else {
      completeFingerprintScan();
    }
  }

  function cancelFingerprintScan() {
    if (isUnlocked || !isHoldingScan) return;

    isHoldingScan = false;
    if (scanAnimationId) cancelAnimationFrame(scanAnimationId);

    if (fingerprintPad) fingerprintPad.classList.remove('scanning');
    if (scannerProgressCircle) {
      scannerProgressCircle.style.strokeDashoffset = `${CIRCLE_CIRCUMFERENCE}`;
    }

    if (lockStatusText) {
      lockStatusText.classList.remove('scanning');
      lockStatusText.textContent = 'Giữ ngón tay lâu hơn một chút nhé em... 🌸';
    }
  }

  function completeFingerprintScan() {
    isFingerprintVerified = true;
    isHoldingScan = false;

    if (scannerProgressCircle) {
      scannerProgressCircle.style.strokeDashoffset = '0';
    }

    if (fingerprintPad) {
      fingerprintPad.classList.remove('scanning');
      fingerprintPad.classList.add('success');
    }

    if (lockStatusText) {
      lockStatusText.classList.remove('scanning');
      lockStatusText.classList.add('success');
      lockStatusText.textContent = '✨ Vân tay hợp lệ! Còn 1 câu hỏi bí mật... 🔐';
    }

    // Rung phản hồi haptic trên điện thoại nếu thiết bị hỗ trợ
    if (navigator.vibrate) {
      try {
        navigator.vibrate([100, 50, 150]);
      } catch (err) {}
    }

    // Nở pháo hoa trái tim tại vị trí nút vân tay
    if (fingerprintPad) {
      const rect = fingerprintPad.getBoundingClientRect();
      createBurstEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    // Chuyển sang Bước 2: Câu hỏi xác thực bảo mật ngày sinh
    setTimeout(() => {
      if (lockScanStep) lockScanStep.style.display = 'none';
      if (lockQuizBox) {
        lockQuizBox.style.display = 'flex';
      }
    }, 650);
  }

  // Xử lý câu hỏi bảo mật: Ngày sinh 16 Tháng 7
  let isQuizSuccess = false;
  if (quizOptionBtns && quizOptionBtns.length > 0) {
    quizOptionBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (isQuizSuccess) return;
        const isCorrect = btn.getAttribute('data-correct') === 'true';

        if (isCorrect) {
          isQuizSuccess = true;
          isUnlocked = true;
          btn.classList.add('correct');

          if (quizFeedback) {
            quizFeedback.className = 'quiz-feedback success';
            quizFeedback.textContent = '🎉 Chuẩn xác 100%! Đúng là em rồi, anh yêu em nhiều! ❤️';
          }

          // Rung chúc mừng và bung tỏa pháo hoa trái tim
          if (navigator.vibrate) {
            try { navigator.vibrate([100, 50, 150]); } catch (_) {}
          }
          const rect = btn.getBoundingClientRect();
          createBurstEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);

          // Tự động phát bài hát "Cứ An Lòng Em" do bạn tự làm
          playMusic();

          // Mở khóa màn hình và chuyển cảnh vào trang web
          setTimeout(() => {
            if (fingerprintLockScreen) {
              fingerprintLockScreen.classList.add('unlocked');
            }
            document.body.classList.remove('locked');
            document.body.style.overflow = '';

            if (motionController) {
              motionController.classList.add('active');
            }

            setTimeout(() => {
              if (fingerprintLockScreen) {
                fingerprintLockScreen.style.display = 'none';
              }
              // Bắt đầu hành trình trình chiếu chuyển cảnh
              startScenePresentation();
            }, 750);
          }, 700);

        } else {
          // Bấm sai đáp án
          btn.classList.add('wrong');
          if (quizFeedback) {
            quizFeedback.className = 'quiz-feedback error';
            quizFeedback.textContent = '❌ Sai rồi nè! Bạn không phải là công chúa của anh ấy rồi 😜';
          }

          if (navigator.vibrate) {
            try { navigator.vibrate([200, 100, 200]); } catch (_) {}
          }

          setTimeout(() => {
            btn.classList.remove('wrong');
          }, 700);
        }
      });
    });
  }

  // Gắn sự kiện cho nút quét vân tay (Hỗ trợ cả điện thoại cảm ứng và chuột máy tính)
  if (fingerprintPad) {
    // Pointer Events (hỗ trợ hiện đại và đồng nhất cho cả Touch & Mouse)
    fingerprintPad.addEventListener('pointerdown', (e) => {
      try { fingerprintPad.setPointerCapture(e.pointerId); } catch (_) {}
      startFingerprintScan(e);
    });

    fingerprintPad.addEventListener('pointerup', (e) => {
      try { fingerprintPad.releasePointerCapture(e.pointerId); } catch (_) {}
      cancelFingerprintScan();
    });

    fingerprintPad.addEventListener('pointercancel', cancelFingerprintScan);
    fingerprintPad.addEventListener('pointerleave', cancelFingerprintScan);

    // Chặn menu chuột phải & menu chọn ảnh trên điện thoại
    fingerprintPad.addEventListener('contextmenu', (e) => e.preventDefault());

    // Hỗ trợ bàn phím (Phím Space hoặc Enter)
    fingerprintPad.addEventListener('keydown', (e) => {
      if ((e.key === ' ' || e.key === 'Enter') && !isHoldingScan && !isUnlocked) {
        e.preventDefault();
        startFingerprintScan();
      }
    });

    fingerprintPad.addEventListener('keyup', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        cancelFingerprintScan();
      }
    });
  }

  /* ==========================================================================
     13. CƠ CHẾ CHUYỂN CẢNH TRÌNH CHIẾU (SCENE PRESENTATION ENGINE)
     - Thay vì cuộn trang xuống, website chuyển động theo từng CẢNH (Scene)
     - Mỗi cảnh là một chương kỷ niệm riêng biệt với hiệu ứng chuyển cảnh mềm mại
     - Tự động chuyển cảnh theo thời gian, hoặc vuốt màn hình/bấm mũi tên/chấm tròn
     ========================================================================== */
  const scenes = document.querySelectorAll('.scene');
  const sceneDots = document.querySelectorAll('.scene-dot');
  const prevSceneBtn = document.getElementById('prevSceneBtn');
  const nextSceneBtn = document.getElementById('nextSceneBtn');
  const btnSceneNextList = document.querySelectorAll('.btn-scene-next');
  const restartShowBtn = document.getElementById('restartShowBtn');

  let currentSceneIndex = 0;
  let isSceneAutoPlay = true;
  let sceneTimerId = null;

  // Thời gian dừng ở mỗi cảnh khi chạy tự động (mili-giây)
  const SCENE_DURATIONS = [
    7000,   // Cảnh 0: Lời ngỏ & Đồng hồ đếm ngày (7 giây)
    8500,   // Cảnh 1: Hành trình tình yêu 4 cột mốc (8.5 giây)
    16000,  // Cảnh 2: 34 Lời nhắc giữ gìn tình yêu (16 giây, ảnh tự lướt)
    26000,  // Cảnh 3: Lá thư tình 20/10 (26 giây: 3s chờ mở thư + 23s để đọc thư thư thả)
    10000,  // Cảnh 4: 3 Hộp lời nhắn bí mật (10 giây, tự lật mở lần lượt)
    0       // Cảnh 5: Lời chúc cuối & Pháo hoa tim (Dừng lại để thưởng thức)
  ];

  function updateSceneNavUI(index) {
    // Cập nhật chấm tròn điều hướng
    sceneDots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Cập nhật mũi tên hai bên
    if (prevSceneBtn) {
      prevSceneBtn.style.opacity = index === 0 ? '0.35' : '1';
      prevSceneBtn.style.pointerEvents = index === 0 ? 'none' : 'auto';
    }
    if (nextSceneBtn) {
      nextSceneBtn.style.opacity = index === scenes.length - 1 ? '0.35' : '1';
      nextSceneBtn.style.pointerEvents = index === scenes.length - 1 ? 'none' : 'auto';
    }

    // Cập nhật nút điều khiển tự động
    if (index === scenes.length - 1) {
      updateMotionButtonUI('finished');
    } else if (isSceneAutoPlay) {
      updateMotionButtonUI('running');
    } else {
      updateMotionButtonUI('paused');
    }
  }

  function updateMotionButtonUI(state) {
    if (!toggleMotionBtn || !motionIcon || !motionLabel) return;
    if (state === 'running') {
      motionIcon.textContent = '⏸️';
      motionLabel.textContent = 'Tạm dừng tự động';
      toggleMotionBtn.classList.remove('paused');
    } else if (state === 'paused') {
      motionIcon.textContent = '▶️';
      motionLabel.textContent = 'Tự động chuyển cảnh';
      toggleMotionBtn.classList.add('paused');
    } else if (state === 'finished') {
      motionIcon.textContent = '🔁';
      motionLabel.textContent = 'Xem lại từ đầu';
      toggleMotionBtn.classList.remove('paused');
    }
  }

  function goToScene(targetIndex, isManual = false) {
    if (targetIndex < 0 || targetIndex >= scenes.length) return;
    if (targetIndex === currentSceneIndex && scenes[currentSceneIndex].classList.contains('active')) return;

    const currentSceneEl = scenes[currentSceneIndex];
    const targetSceneEl = scenes[targetIndex];

    // Tạo hiệu ứng chuyển cảnh mượt mà
    currentSceneEl.classList.remove('active');
    if (targetIndex > currentSceneIndex) {
      currentSceneEl.classList.add('exit-prev');
    } else {
      currentSceneEl.classList.add('exit-next');
    }

    currentSceneIndex = targetIndex;

    targetSceneEl.classList.remove('exit-prev', 'exit-next');
    targetSceneEl.classList.add('active');
    targetSceneEl.scrollTop = 0; // Đưa về đầu cảnh nếu màn hình nhỏ

    setTimeout(() => {
      currentSceneEl.classList.remove('exit-prev', 'exit-next');
    }, 700);

    updateSceneNavUI(currentSceneIndex);
    onSceneActive(currentSceneIndex);

    // Nếu người dùng tự bấm chuyển cảnh hoặc vuốt tay:
    if (isManual) {
      clearTimeout(sceneTimerId);
      if (isSceneAutoPlay && currentSceneIndex < scenes.length - 1) {
        scheduleNextSceneAutoTransition();
      }
    }
  }

  function onSceneActive(index) {
    // Cảnh 2: Thước phim ảnh -> Bắt đầu tự động chuyển ảnh Polaroid
    if (index === 2) {
      startPhotoAutoSlide();
    } else {
      stopPhotoAutoSlide();
    }

    // Cảnh 3: Lá thư tình -> Đợi 3 giây rồi mới tự mở thư, HOẶC người dùng chạm vào mở ngay
    if (index === 3) {
      if (!isEnvelopeOpen) {
        startEnvelopeTimer();
      }
    } else {
      // Khi rời khỏi cảnh thư tình, hủy bộ đếm 3 giây
      clearTimeout(envelopeAutoTimer);
      clearInterval(envelopeCountdownInterval);
    }

    // Cảnh 4: 3 Lời nhắn bí mật -> Tự động lật mở 3 thẻ lần lượt
    if (index === 4) {
      secretCards.forEach((card, idx) => {
        setTimeout(() => {
          card.classList.add('flipped');
        }, 800 + idx * 1400);
      });
    }

    // Cảnh 5: Lời chúc & Pháo hoa -> Tự động bắn 3 đợt pháo hoa tim rực rỡ
    if (index === 5) {
      const wishesSec = document.getElementById('sceneWishes');
      if (wishesSec) {
        const btnRect = heartBurstBtn ? heartBurstBtn.getBoundingClientRect() : wishesSec.getBoundingClientRect();
        const cx = btnRect.left + btnRect.width / 2;
        const cy = btnRect.top + btnRect.height / 2;

        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            createBurstEffect(cx + (Math.random() - 0.5) * 80, cy + (Math.random() - 0.5) * 40);
          }, i * 500);
        }

        if (heartCountNumber) {
          heartCount += 999;
          heartCountNumber.textContent = heartCount.toLocaleString('vi-VN');
        }
      }
    }
  }

  function scheduleNextSceneAutoTransition() {
    clearTimeout(sceneTimerId);
    if (!isSceneAutoPlay || currentSceneIndex >= scenes.length - 1) return;

    const delay = SCENE_DURATIONS[currentSceneIndex] || 8000;
    sceneTimerId = setTimeout(() => {
      if (isSceneAutoPlay && currentSceneIndex < scenes.length - 1) {
        goToScene(currentSceneIndex + 1);
        scheduleNextSceneAutoTransition();
      }
    }, delay);
  }

  function startScenePresentation() {
    isSceneAutoPlay = true;
    currentSceneIndex = 0;

    // Kích hoạt hiển thị thanh điều hướng cảnh
    const sceneNavBar = document.getElementById('sceneNavBar');
    if (sceneNavBar) sceneNavBar.classList.add('active');

    // Đưa về Cảnh 1 và lên lịch tự động chuyển cảnh
    goToScene(0);
    updateMotionButtonUI('running');
    scheduleNextSceneAutoTransition();
  }

  function pauseSceneAutoPlay() {
    isSceneAutoPlay = false;
    clearTimeout(sceneTimerId);
    updateMotionButtonUI('paused');
  }

  function resumeSceneAutoPlay() {
    if (currentSceneIndex >= scenes.length - 1) {
      restartScenePresentation();
      return;
    }
    isSceneAutoPlay = true;
    updateMotionButtonUI('running');
    scheduleNextSceneAutoTransition();
  }

  function restartScenePresentation() {
    clearTimeout(sceneTimerId);
    isSceneAutoPlay = true;

    // Đóng lại phong thư và úp lại các thẻ quà bí mật để xem lại từ đầu
    closeEnvelope();
    clearTimeout(envelopeAutoTimer);
    clearInterval(envelopeCountdownInterval);
    secretCards.forEach((c) => c.classList.remove('flipped'));

    goToScene(0, true);
    updateMotionButtonUI('running');
    scheduleNextSceneAutoTransition();
  }

  // Gắn sự kiện các nút chuyển cảnh
  if (sceneDots && sceneDots.length > 0) {
    sceneDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        goToScene(idx, true);
      });
    });
  }

  if (prevSceneBtn) {
    prevSceneBtn.addEventListener('click', () => {
      goToScene(currentSceneIndex - 1, true);
    });
  }

  if (nextSceneBtn) {
    nextSceneBtn.addEventListener('click', () => {
      goToScene(currentSceneIndex + 1, true);
    });
  }

  if (btnSceneNextList && btnSceneNextList.length > 0) {
    btnSceneNextList.forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextIdx = parseInt(btn.getAttribute('data-next'), 10);
        goToScene(nextIdx, true);
      });
    });
  }

  if (restartShowBtn) {
    restartShowBtn.addEventListener('click', restartScenePresentation);
  }

  if (toggleMotionBtn) {
    toggleMotionBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentSceneIndex >= scenes.length - 1) {
        restartScenePresentation();
      } else if (isSceneAutoPlay) {
        pauseSceneAutoPlay();
      } else {
        resumeSceneAutoPlay();
      }
    });
  }

  // Vuốt màn hình cảm ứng để chuyển cảnh trên điện thoại (Touch Swipe)
  let touchSceneStartX = 0;
  let touchSceneStartY = 0;

  window.addEventListener('touchstart', (e) => {
    touchSceneStartX = e.touches[0].clientX;
    touchSceneStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].clientX - touchSceneStartX;
    const deltaY = e.changedTouches[0].clientY - touchSceneStartY;

    // Chỉ nhận diện vuốt ngang và không bị nhầm lẫn khi người dùng cuộn nội dung cảnh
    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        // Vuốt sang trái -> Sang cảnh tiếp theo
        goToScene(currentSceneIndex + 1, true);
      } else {
        // Vuốt sang phải -> Quay lại cảnh trước
        goToScene(currentSceneIndex - 1, true);
      }
    }
  }, { passive: true });

  // Điều hướng bằng phím mũi tên trên bàn phím máy tính (← / → / Phím cách)
  window.addEventListener('keydown', (e) => {
    if (document.body.classList.contains('locked')) return;
    if (lightboxModal && lightboxModal.classList.contains('active')) return;
    if (gridModal && gridModal.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      goToScene(currentSceneIndex + 1, true);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToScene(currentSceneIndex - 1, true);
    }
  });

  // Khi người dùng cuộn hoặc chạm đọc thư tình, giữ nguyên cảnh để không bị ngắt quãng
  const sceneLetter = document.getElementById('sceneLetter');
  if (sceneLetter) {
    ['wheel', 'touchmove', 'scroll'].forEach((evt) => {
      sceneLetter.addEventListener(evt, () => {
        if (currentSceneIndex === 3 && isSceneAutoPlay) {
          scheduleNextSceneAutoTransition();
        }
      }, { passive: true });
    });
  }

  // Khởi chạy nạp toàn bộ ảnh
  initGallery();

});
