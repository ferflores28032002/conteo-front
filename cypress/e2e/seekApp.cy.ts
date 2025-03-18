describe("Home Page", () => {
  it("checks the main title, description, and register button functionality", () => {
    cy.visit("/");

    // Verificar el título principal
    cy.get("#cypress-title-home").contains("con Conteo");

    // Verificar la descripción principal
    cy.get("#cypress-description-home").contains(
      "¡Descubre cómo organizar y supervisar tus productos nunca fue tan fácil! con Conteo, puedes visualizar tus productos, actualizarlos en diferentes estados y mantener todo bajo control. Una app diseñada para ayudarte a priorizar, completar tus objetivos y simplificar tu vida, sin complicaciones."
    );

    // Verificar que el botón de registro esté visible y redirige correctamente
    cy.contains("Registrate →").should("be.visible").click();
    cy.url().should("include", "/register");
  });
});

describe("Login Page", () => {
  it("checks the login page does not contain incorrect texts", () => {
    cy.visit("/login");

    // Verificar que el título 'Crea una cuenta' NO esté presente
    cy.contains("Crea una cuenta").should("not.exist");
  });
});

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/login"); // Asegurarse de visitar la página de inicio de sesión antes de cada prueba
  });

  it("checks that clicking 'Crear una cuenta' redirects to the register page", () => {
    // Verificar que el enlace 'Crear una cuenta' esté presente y con el texto correcto
    cy.contains("Crear una cuenta")
      .should("be.visible")
      .and("have.css", "color", "rgb(59, 130, 246)") // Validar color (puedes ajustar según el diseño)
      .click(); // Hacer clic en el enlace

    // Verificar redirección a la página de registro
    cy.url().should("include", "/register");
  });

  it("checks that clicking '¿Olvidaste tu contraseña?' redirects to the password recovery page", () => {
    // Verificar que el enlace '¿Olvidaste tu contraseña?' esté presente y con el texto correcto
    cy.contains("¿Olvidaste tu contraseña?")
      .should("be.visible")
      .and("have.css", "color", "rgb(59, 130, 246)") // Validar color (puedes ajustar según el diseño)
      .click(); // Hacer clic en el enlace

    // Verificar redirección a la página de recuperación de contraseña
    cy.url().should("include", "/password-recovery");
  });
});

describe("Register Page", () => {
  beforeEach(() => {
    cy.visit("/register"); // Asegúrate de visitar la página de registro antes de cada prueba
  });

  it("checks the presence of the main elements and texts on the register page", () => {
    // Verificar el título principal
    cy.contains("Crea una cuenta").should("be.visible");

    // Verificar los inputs (nombre, correo, contraseña)
    cy.get("input[name='name']").should("exist");
    cy.get("input[name='email']").should("exist");
    cy.get("input[name='password']").should("exist");

    // Verificar el botón "Crear cuenta"
    cy.contains("Crear cuenta").should("be.visible");

    // Verificar el enlace "¿Ya tienes una cuenta?"
    cy.contains("¿Ya tienes una cuenta?").should("be.visible");
  });

  it("checks the functionality of the 'Crear cuenta' button", () => {
    // Llenar los inputs con datos válidos
    cy.get("input[name='name']").type("Fernando");
    cy.get("input[name='email']").type("fernando@example.com");
    cy.get("input[name='password']").type("password123");

    // Hacer clic en el botón "Crear cuenta"
    cy.contains("Crear cuenta").click();
  });

  it("checks the '¿Ya tienes una cuenta?' link redirects to the login page", () => {
    // Verificar que el enlace "¿Ya tienes una cuenta?" redirige correctamente
    cy.contains("¿Ya tienes una cuenta?").should("be.visible").click();

    // Verificar que redirige a la página de inicio de sesión
    cy.url().should("include", "/login");
  });
});

describe("Footer Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Asegúrate de que la página con el Footer esté disponible
  });

  it("checks the main heading and text in the footer", () => {
    // Verificar el texto principal del footer
    cy.contains(
      "con Conteo, cada producto importa. Organiza, supervisa y alcanza tus metas con facilidad."
    ).should("be.visible");

    // Verificar el texto secundario
    cy.contains(
      "Haz que cada producto cuente con Conteo y alcanza tus metas fácilmente."
    ).should("be.visible");
  });

  it("checks the 'Empezar' link redirects to the login page", () => {
    // Verificar que el enlace 'Empezar →' redirige correctamente
    cy.contains("Empezar →").should("be.visible").click();

    // Verificar redirección a la página de inicio de sesión
    cy.url().should("include", "/login");
  });

  it("checks the copyright text", () => {
    // Verificar que el texto de derechos de autor esté presente
    cy.contains(
      `© ${new Date().getFullYear()} Conteo todos los derechos reservados.`
    ).should("be.visible");
  });

  it("checks the footer links (Términos, Privacidad, Cookies)", () => {
    // Verificar que los enlaces 'Términos', 'Privacidad' y 'Cookies' estén presentes
    cy.contains("Terminos").should("be.visible").and("have.attr", "href", "#");
    cy.contains("Privacidad")
      .should("be.visible")
      .and("have.attr", "href", "#");
    cy.contains("Cookies").should("be.visible").and("have.attr", "href", "#");

    // Simular clic en cada enlace (sin redirección real ya que los enlaces apuntan a '#')
    cy.contains("Terminos").click();
    cy.contains("Privacidad").click();
    cy.contains("Cookies").click();
  });
});
